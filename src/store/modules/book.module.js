
import { bookService } from '@/services/bookService.js';
export default {
    state: {
        books: null,
        booksFilterBy: {
            txt: '',
            author: '',
            minPrice: null,
            maxPrice: null,
            onlyOnSale:false
        },
        bookToEdit: null,
        categories: ['All Books','Computers', 'Hack', 'Fiction', 'Science Fiction', 'History', 'Novel', 'Comics', 'Poetry', 'Short Stories', 'Music', 'Fantasy', 'Children']
    },
    getters: {
        booksToShow(state) {
            let books = state.books;
            if (!state.booksFilterBy) return books;
            if (state.booksFilterBy.txt) books = books.filter(book => book.title.toLowerCase().includes(state.booksFilterBy.txt.toLowerCase()));
            if (state.booksFilterBy.author) books = books.filter(book => book.authors.join().toLowerCase().includes(state.booksFilterBy.author.toLowerCase()));
            if (state.booksFilterBy.minPrice) books = books.filter(book => book.listPrice.amount > state.booksFilterBy.minPrice);
            if (state.booksFilterBy.maxPrice) books = books.filter(book => book.listPrice.amount < state.booksFilterBy.maxPrice);
            if (state.booksFilterBy.onlyOnSale) books = books.filter(book => book.listPrice.isOnSale);
            return books;;
        },
        popularBooks(state) {
            if (!state.books) return [];
            const currBooks = JSON.parse(JSON.stringify(state.books));
            let sortedBooks = JSON.parse(JSON.stringify(currBooks.sort((a, b) => b.averageRating - a.averageRating)));
            const popularBooks = sortedBooks.filter((book, idx) => idx < 4)
            return popularBooks
        },
        newBooks(state) {
            if (!state.books) return [];
            const currBooks = JSON.parse(JSON.stringify(state.books));
            let sortedBooks = JSON.parse(JSON.stringify(currBooks.sort((a, b) => b.addedAt - a.addedAt)));
            const popularBooks = sortedBooks.filter((book, idx) => idx < 4)
            return popularBooks
        }
    },
    mutations: {
        setBooks(state, { books }) {
            state.books = books;
        },
        removeBook(state, { id }) {
            const idx = state.books.findIndex(book => book.id === id);
            state.books.splice(idx, 1);
        },
        setBookToEdit(state, { book }) {
            state.bookToEdit = book;
        },
        saveBook(state, { book }) {
            const idx = state.books.findIndex(currBook => currBook.id === book.id)
            if (idx === -1) {
                state.books.push(book);
            }
            else state.books.splice(idx, 1, book);
        },
        setBooksFilterBy(state, { filterBy }) {
            state.booksFilterBy = filterBy;
        }
    },
    actions: {
        async loadBooks({ commit }, { filterBy = {} }) {
            const books = await bookService.query(filterBy);
            commit({ type: 'setBooks', books });
        },
        async removeBook({ commit }, { id }) {
            await bookService.remove(id);
            commit({ type: 'removeBook', id });
        },
        setBookToEdit({ commit }, { book = null }) {
            commit({ type: 'setBookToEdit', book });
        },
        async saveBook({ commit }, { book, isUpdateAverageRating = false }) {
            const savedBook = await bookService.save(book, isUpdateAverageRating);
            commit({ type: 'saveBook', book: savedBook });
            return savedBook;
        },
    },
    modules: {}
}
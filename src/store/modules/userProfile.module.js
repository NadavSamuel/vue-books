


export default {
    state: {
        pickedColor: null,
    },
    getters: {
        pickedColor(state) {
            return state.pickedColor;
        }
    },
    mutations: {
        setPickedColor(state, { pickedColor }) {
            state.pickedColor = pickedColor
        },
        removeBook(state, { id }) {
            const idx = state.books.findIndex(book => book.id === id)
            state.books.splice(idx, 1)
        },
        saveBook(state, { book }) {
            const idx = state.books.findIndex(currBook => book.id === currBook.id)
            if (idx === -1) {
                state.books.push(book)
            }
            else state.books.splice(idx, 1, book)
        },
        setBooksFilterBy(state, { filterBy }) {
            state.booksFilterBy = filterBy
        }
    },
    actions: {
        async setPickedColor(context,{pickedColor}) {
            // const books = await bookService.query()
            context.commit({ type: 'setPickedColor', pickedColor })
        },
        // async removeBook({ commit }, { id }) {
        //     await bookService.remove(id)
        //     commit({ type: 'removeBook', id })
        // },
        // async saveBook({ commit }, { book }) {
        //     const savedBook = await bookService.save(book)
        //     commit({ type: 'saveBook', book: savedBook })
        //     return savedBook
        // },
        // async getBeer(context, { id }) {
        //     return id ? await beerService.get(id) : beerService.getEmptyBeer()
        // }
    },
    modules: {}
}
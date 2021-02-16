import axios from 'axios'
const KEY = 'AIzaSyChwuC7vESsz_dijDCMrwCLHcKyANzL2q4'

export const googleBookService = {
    getArrangedBooks
}
 async function getBooksFromGoogle(bookName) {
    try{
    const books = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${KEY}`)
    return books.data.items
    }
    catch{
        console.log('Error in  google API')
    }
}
async function getArrangedBooks(bookName){
    const books = await getBooksFromGoogle(bookName)
    const arrangedBooks = books.map(book =>{
        const arrangedBook = {
            title:book.volumeInfo.title,
            subtitle:book.volumeInfo.subtitle,
            authors:book.volumeInfo.authors,
            publishedDate:book.volumeInfo.publishedDate,
            pageCount:book.volumeInfo.pageCount,
            categories:book.volumeInfo.categories,
            reviews:[],
            language:book.volumeInfo.language,
            listPrice:{
                amount:55,
                currencyCode:'EUR',
                isOnSale:true
            }
        }
        if(book.volumeInfo.imageLinks) arrangedBook.thumbnail = book.volumeInfo.imageLinks.thumbnail;
        else arrangedBook.thumbnail = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Open_book_nae_02.svg/1200px-Open_book_nae_02.svg.png'
        return arrangedBook
    })
    return arrangedBooks
}
// {
//     "id": "OXeMG8wNskc",
//     "title": "metus hendrerit",
//     "subtitle": "mi est eros convallis auctor arcu dapibus himenaeos",
//     "authors": [
//       "Barbara Cartland"
//     ],
//     "publishedDate": 1999,
//     "description": "placerat nisi sodales suscipit tellus tincidunt mauris elit sit luctus interdum ad dictum platea vehicula conubia fermentum habitasse congue suspendisse",
//     "pageCount": 713,
//     "categories": [
//       "Computers",
//       "Hack"
//     ],
//     "reviews":[
//       {
//         "id":"1g434",
//         "by":"Chris Potter",
//         "rate":5,
//         "txt":"Great fkin BOKK!!!!!"
//       }
//     ],
//     "thumbnail": "http://coding-academy.org/books-photos/20.jpg",
//     "language": "en",
//     "listPrice": {
//       "amount": 109,
//       "currencyCode": "EUR",
//       "isOnSale": false
//     }
//   },


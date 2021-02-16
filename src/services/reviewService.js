import httpService from './httpService';
export const reviewService = {
    reviewAdd,
    reviewDelete
}
async function reviewAdd(bookId, reviewToAdd) {
    reviewToAdd.onBookId = bookId
    return httpService.post(`review/`, { reviewToAdd })

}

async function reviewDelete(bookId, reviewToDeleteId) {
    const relevantBook = await getById(bookId)
    relevantBook.reviews = relevantBook.reviews.filter(review => review.id !== reviewToDeleteId)
    save(relevantBook)
}
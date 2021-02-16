import httpService from './httpService';

export const bookService = {
  query,
  save,
  remove,
  getById,
  reviewAdd,
  reviewDelete
}

function query(filterBy = {}) {
  let queryStr = ``;
  if (filterBy.title) queryStr += `?title=${filterBy.title}`;
  if (filterBy.byUserId) queryStr += `?byUserId=${filterBy.byUserId}`;
  if (filterBy.category) queryStr += `?category=${filterBy.category}`;
  return httpService.get(`book${queryStr || ''}`);
}
function getById(_id) {
  return httpService.get(`book/${_id}`)
}
function remove(_id) {
  return httpService.delete(`book/${_id}` )
}
function save(book,isUpdateAverageRating) {
  if (book._id) {
    httpService.put(`book/`, { book,isUpdateAverageRating })
  } else {
    httpService.post(`book/`, { book })
  }
  return Promise.resolve(book);
}

async function reviewAdd(bookId, review) {
  const relevantBook = await getById(bookId);
  review.id = _makeId();
  relevantBook.reviews.unshift(review);
  save(relevantBook);
}

async function reviewDelete(bookId, reviewToDeleteId) {
  const relevantBook = await getById(bookId)
  relevantBook.reviews = relevantBook.reviews.filter(review => review.id !== reviewToDeleteId)
  save(relevantBook)
}

function _makeId(length = 5) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

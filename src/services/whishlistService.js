import httpService from './httpService';

export const whishlistService = {
    update,
    getWhishlist,
    checkIfBookIsLiked,
}
function checkIfBookIsLiked(bookId){
    return httpService.get(`whishlist/${bookId}`) 
}
function getWhishlist(userId){
    return httpService.get(`whishlist/${userId}`) 
}
function update(newWhishlist,userId){
    return httpService.put(`whishlist/${userId}`,{newWhishlist}) 
}
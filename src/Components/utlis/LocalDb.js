const getAllListedReadListFromLocalDb=()=>{
    const allListedReadList= localStorage.getItem('ListedReadList');

    if(allListedReadList) return JSON.parse(allListedReadList)
    return[];
};
const addLocalReadListToLocalDb=(book)=>{
const allBooks= getAllListedReadListFromLocalDb();
 const isAlreadyExist= allBooks.find(i=>i.bookId=== book.bookId);
 if(!isAlreadyExist){
    // that data add the local Db
    allBooks.push(book);
localStorage.setItem('ListedReadList', JSON.stringify(allBooks))
 }
};
export {getAllListedReadListFromLocalDb, addLocalReadListToLocalDb}

const getAllListedWishListFromLocalDb=()=>{
    const allListedWishList=localStorage.getItem('WishedLists');
    if(allListedWishList)return JSON.parse(allListedWishList);
    return[];
};

const addLocalWishListToLocalDb=(book)=>{
    const allBooks=getAllListedWishListFromLocalDb();
    const isAlreadyExist= allBooks.find(i=>i.bookId === book.bookId);
    if(!isAlreadyExist){
        allBooks.push(book)
        localStorage.setItem('WishedLists', JSON.stringify(allBooks))
    };
};

export{getAllListedWishListFromLocalDb,addLocalWishListToLocalDb}
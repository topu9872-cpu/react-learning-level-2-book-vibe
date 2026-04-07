import React, {createContext, useState } from 'react';

export const BookProvider = createContext();


const BookContext = ({children}) => {

const [storedBooks, setStoredBooks]=useState([])

const handleMarkAsRead=(currentBook)=>{
  
/**
 * step 1: store book id or store book object
 * step 2: where to store
 * step 3: if the book is already exist then a alert or toast
 * step 4: if not then add the book in the array or collection
 */


const isExistBook = storedBooks.find(
    (book)=>book.bookId===currentBook.bookId
);
if(isExistBook){
    alert('The book is already exist')
}else{
    setStoredBooks([...storedBooks, currentBook])
    alert(`${currentBook.bookName} is Added to List`)
}
// console.log(storedBooks,setStoredBooks)


}

const data={
    storedBooks, 
    setStoredBooks,
    handleMarkAsRead
}




    return (<BookProvider.Provider value={data}> {children} </BookProvider.Provider>)
   
};

export default BookContext;
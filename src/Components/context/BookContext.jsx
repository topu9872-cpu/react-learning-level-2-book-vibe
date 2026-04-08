import React, { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { addLocalReadListToLocalDb, addLocalWishListToLocalDb, getAllListedReadListFromLocalDb, getAllListedWishListFromLocalDb } from "../utlis/LocalDb";

export const BookProvider = createContext();

const BookContext = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState(()=> getAllListedReadListFromLocalDb());
  const [wishList, setWishList] = useState(()=> getAllListedWishListFromLocalDb());





  const handleMarkAsRead = (currentBook) => {
    /**
     * step 1: store book id or store book object
     * step 2: where to store
     * step 3: if the book is already exist then a alert or toast
     * step 4: if not then add the book in the array or collection
     */
    addLocalReadListToLocalDb(currentBook)

    const isExistBook = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`${currentBook.bookName} is Added to List`);
    }
    // console.log(storedBooks,setStoredBooks)
    const data = {
      storedBooks,
      setStoredBooks,
      handleMarkAsRead,
    };
  };

  const handleWishList = (currentBook) => {
    /**
     * step 1: store book id or store book object
     * step 2: where to store
     * step 3: if the book is already exist then a alert or toast
     * step 4: if not then add the book in the array or collection
     */
addLocalWishListToLocalDb(currentBook)
    const isExistInReadList = storedBooks.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistInReadList) {
      toast.error("This is already in the read list");
      return;
    }

    const isExistBook = wishList.find(
      (book) => book.bookId === currentBook.bookId,
    );
    if (isExistBook) {
      toast.error("The book is already exist");
    } else {
      
      setWishList([...wishList, currentBook]);
      toast.success(`${currentBook.bookName} is Added to List`);
    }
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
    wishList,
    setWishList,
    handleWishList,
  };
  return (
    <BookProvider.Provider value={data}> {children} </BookProvider.Provider>
  );
};

export default BookContext;

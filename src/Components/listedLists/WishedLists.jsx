import React, { useContext } from "react";
import { BookProvider } from "../context/BookContext";
import BooksCard from "../UI/BooksCard";

const WishedLists = () => {
  const { wishList } = useContext(BookProvider);

  if( wishList.length===0){
    return(
        <div className="w-10/12 flex justify-center mx-auto">
        <div className="bg-gray-200 flex items-center justify-center h-60 p-40">
            <h1 className="font-bold text-4xl text-nowrap">NO  wishList list data Found</h1>
        </div>
        </div>
    )
}

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {wishList.map((book, ind) => (
          <BooksCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default WishedLists;

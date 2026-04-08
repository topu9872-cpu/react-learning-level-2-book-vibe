import React, { useContext, useEffect, useState } from "react";
import { BookProvider } from "../context/BookContext";
import BooksCard from "../UI/BooksCard";

const WishedLists = ({sortingType}) => {
  const { wishList } = useContext(BookProvider);

//    this is for sort
const [filteredWishList, setFilteredWishList]=useState(wishList);

useEffect(()=>{
    if(sortingType==='Pages'){
        const sortedData=[...wishList].sort((a, b)=> a.totalPages - b.totalPages);
        setFilteredWishList(sortedData)
        console.log(sortedData)
    }else if(sortingType === 'Rating'){
        const sortedData=[...wishList].sort((a,b)=>a.rating - b.rating)
        setFilteredWishList(sortedData)
        console.log(sortedData)
    }
},[sortingType, wishList])

  if( filteredWishList.length=== 0){
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
        {filteredWishList.map((book, ind) => (
          <BooksCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};

export default WishedLists;

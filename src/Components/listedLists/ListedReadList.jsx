import React, { use, useContext, useEffect, useState } from "react";
import { BookProvider } from "../context/BookContext";
import BooksCard from "../UI/BooksCard";
//
const ListedReadList = ({ sortingType }) => {
  const { storedBooks } = useContext(BookProvider);
  //
  // this is for sort
  const [filteredReadList, setFilteredReadList] = useState(storedBooks);
  //
  useEffect(() => {
    if (sortingType === "Pages") {
      const sortedData = [...storedBooks].sort(
        (a, b) => a.totalPages - b.totalPages,
      );
      setFilteredReadList(sortedData);
    } else if (sortingType === "Rating") {
      const sortedData = [...storedBooks].sort((a, b) => a.rating - b.rating);
      setFilteredReadList(sortedData);
    }
  }, [sortingType, storedBooks]);

  //
  if (filteredReadList.length === 0) {
    return (
      <div className="w-10/12 flex justify-center mx-auto">
        <div className="bg-gray-200 flex items-center justify-center h-60 p-40">
          <h1 className="font-bold text-4xl text-nowrap">
            NO Read list data Found
          </h1>
        </div>
      </div>
    );
  }
  //
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReadList.map((book, ind) => (
          <BooksCard key={ind} book={book} />
        ))}
      </div>
    </div>
  );
};
export default ListedReadList;

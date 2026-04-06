import React, { use } from "react";

import BooksCard from "../UI/BooksCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);

  return (
    <div>
      <h1 className="text-5xl text-center font-bold mb-10">Books</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
        books.map((book,ind) => {
          return (
            <BooksCard key={ind} book={book}/>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;

import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { Link } from 'react-router';

const BooksCard = ({book}) => {
    return (
       
             <Link to={`/bookDeteils/${book.bookId}`} className="card bg-base-100 shadow-sm">
    <figure className="p-10 rounded-xl">
      <img
        src={book.image}
        alt={book.bookName}
        className="rounded-xl rotate-[8deg] h-70"
      />
    </figure>
    <div className="card-body">
      <div className="flex justify-between">
        {book.tags.map((tag,ind) => (
          <div key={ind} className="badge text-green-400  bg-green-100 font-semibold">
            Success {tag}
          </div>
        ))}
      </div>
      <h2 className="card-title text-2xl">{book.bookName}</h2>
      <p className="font-semibold">{book.author}</p>
      <div className="card-actions justify-between border-t-2 border-dashed border-gray-300 pt-10 ">
        <div className="font-semibold">{book.category}</div>
        <div className="font-semibold flex items-center gap-2">
          {book.rating}
          <FaRegStar />
        </div>
      </div>
    </div>
 
      </Link>
    );
};

export default BooksCard;
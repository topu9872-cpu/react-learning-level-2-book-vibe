import React, { use } from 'react';

const booksPromise= fetch('/booksData.json').then(res=>res.json())

const AllBooks = () => {
    const books= use(booksPromise);
    console.log(books)
    return (
        <div>
         {
            books.map(book=>{
              return (
                <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={book.image}
      alt="image" />
  </figure>
  <div className="card-body">
    <div className='flex justify-between'>
         {book.tags.map((tag) =>( <div className="badge badge-success font-serif text-white">Success {tag}</div>))}
    </div>
    <h2 className="card-title text-2xl">
    {book.bookName}
    </h2>
    <p className='font-semibold'>{book.author}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
              )
            })
         }
        </div>
    );
};

export default AllBooks;
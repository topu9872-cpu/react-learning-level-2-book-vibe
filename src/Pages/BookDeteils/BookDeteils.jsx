import { useLoaderData, useParams } from "react-router";

const BookDeteils = () => {
  // just change the name of bookId
  const { bookId: bookParamsId } = useParams();

  const books = useLoaderData();

  const expectedBook = books.find((book) => book.bookId == bookParamsId);
  const {
    bookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    categoty,
    tags,
    publisher,
    yearOfPublishing,
  } = expectedBook;
  return (
    <div>
      <div className="grid lg:grid-cols-2 bg-base-100 space-y-5 shadow-sm mt-10 w-10/12 container mx-auto mb-10 pb-6 ">
        <figure className=" bg-gray-100 rounded-2xl flex items-center py-10">
          <img className="max-w-70 mx-auto " src={image} alt={bookName} />
        </figure>
        <div className="px-8">
          <h2 className="card-title text-2xl">{bookName}</h2>
          <h2 className="card-title">{author}</h2>
          <p className="py-2 border-y">{categoty}</p>
          <p>Review: {review}</p>

          <div className="flex justify-between ">
            {tags.map((tag) => (
              <div className=" badge  text-green-400 my-4 bg-green-100">
                <p>{tag}</p>
              </div>
            ))}
          </div>

          <div className=" border-t space-y-5">
            <div className="flex justify-between items-center gap-2">
              <span>Number of pages:</span>
              <span>{totalPages}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span> Publisher:</span>
              <span>{publisher}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span> yearOfPublishing:</span>
              <span>{yearOfPublishing}</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="btn ">Mark as Read</button>
              <button className="btn btn-primary">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDeteils;

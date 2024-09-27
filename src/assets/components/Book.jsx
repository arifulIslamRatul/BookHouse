import { Link } from "react-router-dom";
const Book=({book})=> {
    const {bookId, image, bookName, author, category, rating}=book;

  return (
    <>
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
               <img
                   src={image}
                   alt="Shoes"
                   className="rounded-xl" />
           </figure>
           <div className="card-body items-start">
                   <h2 className="card-title">{bookName}</h2>
                   <p>Author: {author}</p>
                   <p>Category: {category}</p>
                   <p>Rating: {rating}</p>
                   <p>Category: {category}</p>
                   <div className="card-actions">
                      <Link to={`/book/${bookId}`}> <button className="btn btn-sm btn-glass btn-outline">Book Details</button></Link>
                   </div>
            </div>
        </div></>
  );
};

export default Book;
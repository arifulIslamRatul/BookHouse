import React,{useState,useEffect} from 'react';


function showBooks() {
  const [data,setData]=useState([]);
  const getData=()=>{
    fetch('books.json'
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        setData(myJson)
      });
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full mt-10 gap-4" key={data.bookId}>
     {
       data && data.length>0 && data.map((book)=>
        <>
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
               <img
                   src={book.image}
                   alt="Shoes"
                   className="rounded-xl" />
           </figure>
           <div className="card-body items-start">
                   <h2 className="card-title">{book.bookName}</h2>
                   <p>Author: {book.author}</p>
                   <p>Category: {book.category}</p>
                   <p>Rating: {book.rating}</p>
                   <p>Category: {book.category}</p>
                   <div className="card-actions">
                       <button className="btn btn-sm btn-glass btn-outline">Book Details</button>
                   </div>
            </div>
        </div></>
       
    )
     }
    </div>
  );
  
}

export default showBooks;


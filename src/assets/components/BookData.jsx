import React,{useState,useEffect} from 'react';
import Book from "../components/Book"


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
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full mt-10 gap-4" >
     {
       data && data.length>0 && data.map((book)=><Book key={data.bookId} book={book}></Book>
       
    )
     }
    </div>
  );
  
}

export default showBooks;


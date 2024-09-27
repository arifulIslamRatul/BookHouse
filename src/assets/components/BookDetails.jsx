import React from 'react'
import { useLoaderData } from 'react-router-dom'


export default function BookDetails() {

  const book = useLoaderData();

  const{bookId, bookName}=book;
  return (
    <div>
      
      <h3>Bookname: {bookName}</h3>
      <p>BookId: {bookId}</p>
      
      </div>
  )
}

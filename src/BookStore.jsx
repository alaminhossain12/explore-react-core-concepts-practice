/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import Bool from "./Bool";

const BookStore = ({ books }) => {
  return (
    <div>
      <h2>Books: {books.length}</h2>
      {books.map((book) => (
        <Bool key={book.id} book={book}></Bool>
      ))}
    </div>
  );
};

export default BookStore;

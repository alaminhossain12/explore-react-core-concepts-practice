/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Bool = ({ book }) => {
  const { title, author } = book;
  return (
    <div className="book">
      <h2>name: {title}</h2>
      <p>Author: {author}</p>
    </div>
  );
};

export default Bool;

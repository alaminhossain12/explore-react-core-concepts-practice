/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Singer = ({ singer }) => {
  const { name, age } = singer;
  return (
    <div
      style={{
        border: "2px solid tomato",
        padding: "20px",
        margin: "20px",
        borderRadius: "20px",
      }}
    >
      <h2>Name: {name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default Singer;

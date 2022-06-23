import React from "react";

const Book = ({ img, title, author }) => {
  //attribute, eventHandler,OnClick, onMouseOver
  // Refrence function

  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello World");
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />

      {/* clickHandleris the Function */}

      <h1 type="button" onClick={clickHandler}>
        {title}
      </h1>

      {/* Using an inline function  */}

      {/* <h4 onClick={() => console.log(author)}>{author}</h4> */}

      <button
        type="button"
        onClick={() => {
          complexExample(author);
        }}
      >
        Example for ref
      </button>
    </article>
  );
};
export default Book;

import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

//More import
import { books } from "./books.js";
import Book from "./Book.js";

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));

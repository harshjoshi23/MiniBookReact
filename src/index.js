import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

//More import if we want to change the name change it everywhere

import { data } from "./books.js";
import SpecificBook from "./Book.js";

function Booklist() {
  return (
    <section className="booklist">
      {data.map((book) => {
        return <SpecificBook key={book.id} {...book}></SpecificBook>;
      })}
    </section>
  );
}

ReactDOM.render(<Booklist />, document.getElementById("root"));

import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

//Creating objects
const firstBook = {
  img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UL480_QL65_.jpg",
  title: "Rich Dad Poor Dad:",
  author: "Robert T. Kiyosaki",
};
const SecondBook = {
  img:
    "https://images-na.ssl-images-amazon.com/images/I/71GqMTCFWtL._AC._SR360,460.jpg",
  title: "Extreme Ownership: How U.S. Navy SEALs Lead ",
  author: "ocko Willink",
};

function Booklist() {
  return (
    <section className="booklist">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      />
      <Book
        img={SecondBook.img}
        title={SecondBook.title}
        author={SecondBook.author}
      />
    </section>
  );
}
const Book = (props) => {
  return (
    <article className="book">
      {/*Accessing the props */}
      <img src={props.img} alt="" />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));

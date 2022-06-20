import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

//Creating array of objects
const books = [
  {
    img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UL480_QL65_.jpg",
    title: "Rich Dad Poor Dad:",
    author: "Robert T. Kiyosaki",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71GqMTCFWtL._AC._SR360,460.jpg",
    title: "Extreme Ownership: How U.S. Navy SEALs Lead ",
    author: "ocko Willink",
  },
  {
    img: "https://m.media-amazon.com/images/I/81zwIAF774L._AC_UL480_QL65_.jpg",
    title: "The War on the West",
    author: "Douglas Murray",
  },
];
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
}
const Book = (props) => {
  const { img, title, author } = props.book;
  return (
    <article className="book">
      {/*Accessing the props */}
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));

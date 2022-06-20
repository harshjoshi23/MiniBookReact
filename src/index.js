// import React, { Children } from "react";
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
];
function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        // console.log(book);
        //Can return whatever we want

        return (
          <div>
            <h3>{title} </h3>
            <h6>{author} </h6>
          </div>
        );
      })}

      {/* <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      ></Book>
      <Book
        img={SecondBook.img}
        title={SecondBook.title}
        author={SecondBook.author}
      /> */}
    </section>
  );
}
const Book = ({ img, author, title }) => {
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

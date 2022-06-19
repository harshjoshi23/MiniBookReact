import React, { Children } from "react";
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
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta
          magni illo eligendi facilis quisquam!
        </p>
      </Book>
      <Book
        img={SecondBook.img}
        title={SecondBook.title}
        author={SecondBook.author}
      />
    </section>
  );
}
const Book = ({ img, author, title, children }) => {
  return (
    <article className="book">
      {/*Accessing the props */}
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));

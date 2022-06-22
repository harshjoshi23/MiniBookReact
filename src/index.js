import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css";

//Creating array of objects
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UL480_QL65_.jpg",
    title: "Rich Dad Poor Dad:",
    author: "Robert T. Kiyosaki",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71GqMTCFWtL._AC._SR360,460.jpg",
    title: "Extreme Ownership: How U.S. Navy SEALs Lead ",
    author: "ocko Willink",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/81zwIAF774L._AC_UL480_QL65_.jpg",
    title: "The War on the West",
    author: "Douglas Murray",
  },
];

function Booklist() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props.book;

  // Refrence function
  const clickHandler = () => {
    alert("Hello World");
  };

  const complexExample = (author) => {
    // Consol log the author each and every time we
    // click on the button
    // This is passed dynamically we are looking for author as an argument
    console.log(author);
  };

  return (
    <article className="book">
      <img src={img} alt="" />

      {/* clickHandleris the Function */}

      <h1 type="button" onClick={clickHandler}>
        {title}
      </h1>

      {/* Using an inline function  */}

      <h4 onClick={() => console.log(author)}>{author}</h4>

      <button type="button" onClick={complexExample(author)}>
        Example for ref
      </button>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));

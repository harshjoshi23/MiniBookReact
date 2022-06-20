import React from "react";
import  ReactDOM  from "react-dom"

//CSS
import './index.css'

<<<<<<< Updated upstream
function Booklist(){
  return( <section className="booklist">
  <Book/>
  <Book/>
  <Book/>
  <Book/></section> )
}

const Book = () => {
  return(<article className="book">
    <Image/>
    <Title/>
    <Authr/>
  </article>)
}
const Image = () => {return(<img src="https://m.media-amazon.com/images/I/81bsw6fnUiL
._AC_UL480_QL65_.jpg" alt=""/>)}
const Title = () => {return(<h1>Rich Dad Poor Dad: What the Rich Teach Their Kids
   About Money That the Poor and Middle Class Do Not!</h1>)}

// Using inline CSS in the React
const Authr = () => {return(<h4 style={{
  color:'#617d98',fontSize:'0.75rem',marginTop:'0.25rem'
}}>Robert T. Kiyosaki</h4>)}
=======
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
>>>>>>> Stashed changes

ReactDOM.render(<Booklist/>, document.getElementById("root") )
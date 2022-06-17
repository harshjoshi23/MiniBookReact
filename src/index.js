import React from "react";
import  ReactDOM  from "react-dom"

function Booklist(){
  return( <section><Book/></section> )
}

const Book = () => {
  return(<article>
    <Image></Image>
    <Title/>
    <Authr/>
  </article>)
}
const Image = () => {return(<img src="https://images-eu.ssl-images-amazon.com/images
/I/71g2ednj0JL._AC_UL906_SR906,600_.jpg" alt=""/>)}
const Title = () => {return(<h1>The Psychology of Money</h1>)}
const Authr = () => {return(<h4>Morgan Housel</h4>)}

ReactDOM.render(<Booklist/>, document.getElementById("root") )
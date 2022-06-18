import React from "react";
import  ReactDOM  from "react-dom"

//CSS
import './index.css'

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

ReactDOM.render(<Booklist/>, document.getElementById("root") )
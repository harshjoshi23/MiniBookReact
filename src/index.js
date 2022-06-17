import React from "react";
import ReactDOM  from "react-dom";

function Greeting(){
  return( <div>
    <Person/>
    <Message/>
    </div> )
}

const Person =()=>{return(<h1>Harshvardhan</h1>)}
const Message=()=>{return(<p>Stay High</p>)}

ReactDOM.render(<Greeting/>, document.getElementById("root") )
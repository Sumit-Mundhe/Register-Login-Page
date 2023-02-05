import React from "react";
import ReactDom from "react-dom";
import Form from "./Form";

var isregistered = false;


function App(){
    return(
        <div className="main">
            <Form register= {isregistered}/>
        </div>
    )
}

export default App;
import React from "react";
import ReactDom from "react-dom";

function Input(props){
    return(
        <input 
        className={props.class} 
        type={props.type} 
        placeholder={props.placeholder}
        />
    )
}

export default Input;
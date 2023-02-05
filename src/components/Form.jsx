import React from "react";
import ReactDom from "react-dom";
import Input from "./Input";

function Form(props){
    return(<form>
        <h1>{props.register?"Login":"Register"}</h1>
        <Input class="email" type="email" placeholder="Email" />
        <Input class="password" type="password" placeholder="Password" />
        {!props.register && <Input class="password" type="password" placeholder="Confirm Password" />}
        <button class="submit" type="submit">
            {props.register?"Login":"Register"}
        </button>
    </form>)
}
export default Form;
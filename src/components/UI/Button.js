import React from "react";
import "./Button.css";

const Button = props=>{
    return (
        <React.Fragment>
            <button onClick={props.onClick}>{props.name}</button>
        </React.Fragment>
    );
}

export default Button;
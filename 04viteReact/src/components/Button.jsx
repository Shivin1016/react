import React from "react";
import "./Button.css"

const Button = (props) => {
  return (
    <div className="btn-container">
      <p>{props.children}</p>
      <button id="btn" onClick={props.handleClick}>
        {props.text}
      </button>
    </div>
  );
};

export default Button;

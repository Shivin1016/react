import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  function handleClick() {
    alert("i am clicked");
  }
  function handleMouseOver() {
    alert("Mouse shifted on para");
  }
  function handleInput(e) {
    // console.log("Value changed in input")
    console.log("Value till now -> ", e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    //i am writing my custom behaviour now
    alert(" Can i submit the form now ?");
  }
  return (
    <div>
      {/* Immeadiate invocation */}
      {/* <button onClick={alert("Button click")}>CLick me</button> */}
      <button onClick={() => alert("Clicked me")}>clock me</button>
      {/* <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} />
        <button type="submit">
          submit
        </button>
      </form> */}

      {/* <p onMouseOver={handleMouseOver} style={{ border: "1px solid red" }}> 
        I am a para
      </p> */}
      {/* <button onClick={handleClick}>Click me</button> */}
    </div>
  );
}

export default App;

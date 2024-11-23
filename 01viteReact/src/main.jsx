import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App.jsx";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com/search", target: "_blank" },
  "click me to vivist google"
);

createRoot(document.getElementById("root")).render(
  // reactElement  //inside strict mode it does not work
  <StrictMode> 
    <App/> 
    {/* //as app is just a function so we can write it as a function invokation */}
    {/* App(); */}
  </StrictMode>
);

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ColorSwitch from "./components/ColorSwitch";

function App() {
  const [clicks, setClicks] = useState(0);

  function handleClicks() {
    setClicks((c) => c + 1);
  }

  function getrandomColor() {
    let r = 150 + Math.round(100 * Math.random());
    let g = 150 + Math.round(100 * Math.random());
    let b = 150 + Math.round(100 * Math.random());

    return `rgb(${r} ${g} ${b})`;
  }

  function handleColor() {
    let doc = document.body.style;
    doc.backgroundColor = getrandomColor();
  }
  
  return (
    <div className="container" onClick={handleClicks}>
      <ColorSwitch onChangeColor={handleColor} />
      <h2>Clicks on the page: {clicks}</h2>
    </div>
  );
}

export default App;

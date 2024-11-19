import { useEffect, useState } from "react";
import "./App.css";
import LogerComponent from "./components/LogerComponent";
import TimerComponent from "./components/TimerComponent";
import DataFetcher from "./components/DataFetcher";
import ResizeComponent from "./components/ResizeComponent";
import MultiEffectComponent from "./components/MultiEffectComponent";

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(1);

  // first -> side effect function
  //second-> cleanUp function -> example-> to prevent form memory lickage or to remove particular eventListner
  // Third-> comma seperated dependency list

  //variation1-> runs one every render
  // useEffect(() => {
  //   alert("I will run on each render");
  // });

  //variation2-> runs on only first render
  // useEffect(() => {
  //   alert("I will run on only first render")
  // }, [])

  //variation 3-> run on only when dependencies are updated
  // useEffect(() => {
  //    alert("I will run everytime when count is updated");
  // }, [count])

  //variation 4-> Multiple dependencies
  // useEffect(() => {
  //    alert("I will run on everytime when count/total is updated")
  // }, [count ,total])

  //variation 5-> let's add a cleanUp Funtion
  // useEffect(() => {
  //   alert("count is updated")
  //   return () => {
  //      alert("Count is unmounted from UI")
  //   }
  // }, [count])
  
  

  const handleClick = () => {
    setCount((c) => c + 1); 
  };

  const handleTotalClick = () => { 
    setTotal((c) => c + 1);
  };

  return (
    <div className="container">
      {/* <button onClick={handleClick}>Update count</button>
      <h2>Count is: {count}</h2>
      <button onClick={handleTotalClick}>
        Update Total
      </button>
      <h2>Total is: {total}</h2> */}

      {/* <LogerComponent/> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      {/* <MultiEffectComponent/> */}
    </div>
  );
}

export default App;

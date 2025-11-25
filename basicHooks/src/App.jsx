import { useState } from "react";
import "./App.css";
import InterviewQues from "./components/interviewQues";

function App() {
  const [counter , setCounter] = useState(0);
  const addValue = ()=> setCounter(counter + 1);
  const removeValue = ()=>{
     counter === 0 ? setCounter(0) : setCounter(counter - 1);
  };
  // let counter = 1;

  // const addValue = ()=>{
  //   counter++;
  // }
  // const removeValue = ()=>{
  //   counter--;
  // }

  return (
    // there is a problem that one vaiable changed but its reflection cannot seen 
    //we have to take id , calls etc for reflection
    //That is why react provide hooks which shows the reflection at all places where we use it
    // without using id , class etc...
    //so if changes occure at UI then React will come into Picture
    //react update this counter value at all places where it uses
    <div className="container">
      <h1>Hooks React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}> Add value   </button>
      <button onClick={removeValue} > Remove value </button>
      <footer>counter : {counter}</footer>
      <InterviewQues/>
    </div>
  );
}

export default App;

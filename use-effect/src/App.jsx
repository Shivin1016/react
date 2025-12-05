import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react'

const App = () => {

  const [num, setNum] = useState(0);
  const [num2, setNum2] = useState(0);

  const numChanging = () =>{
    console.log('num changing...'); 
  }
  const num2Changing = () =>{
    console.log('num2 changing...'); 
  }
  // useEffect ==> side by side running functions 
  // it stores process in microtask stack (in side) and after excecuting react , it excute that process side by side
  // if you not used useEffect then function load at each time when UI loaded

  //whenever the state changes it runs ==> that is called mounting
  // useEffect(() => {
  //   const a = Math.random();
  //   console.log(a);
  // });

  //but when we pass empty dependency array , then on changing states it will not runs becuase there is nothing in dependancy so if there is something in dependancy array then o changing dependancy array values then it runs
  // useEffect(function(){
  //   console.log('use effect is running..');
  // },[]);

  //now here num2 pass as a dependancy
  useEffect(function(){
    num2Changing();
    console.log('use effect is running..');
  },[num2]); //onchaning num2 this useEffect will run because now it depend on num2 
  

  return (
    <div> 
      <h1>value of num is {num}</h1>
      <h1>value of num2 is {num2}</h1>
      <button onDoubleClick={() =>{
        setNum2(num2 + 10);
      }} onClick={() =>{
        setNum(num + 1);  
      }}>click</button>  
    </div>
  )
}

export default App

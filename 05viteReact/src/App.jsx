import React from 'react'
import Comp1 from "./components/Comp1"
import { useState } from 'react' ;

const App = () => {
  //create state
  //manage state
  //change state
  //sync the state to all the child
  const [Name , setName] = useState('');
  return (
    <div className = 'card-container'>
      <Comp1 title = 'Card1' name = {Name} setName = {setName}/>
      <Comp1 title = 'Card2' name = {Name} setName = {setName}/>
      {/* <p>I am inside parent Component and value of name is: {Name} </p> */}
    </div>
  )
}

export default App


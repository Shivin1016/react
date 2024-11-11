import './App.css'
import Card from './components/Card';
import Button from './components/Button';
import { useState } from 'react';

function App() {  
  const [count , setCount]  = useState(0);
  function handleClick(){
    setCount(count + 1);
  }
  return (
    <div> 
      <Button handleClick = {handleClick} text = 'Click me'>
        <h1>{count}</h1>
      </Button>
      {/* <Card name = 'Shivani P'>
        <h1>Trying To be Consistence in yourself</h1>
        <p>It's never to late to start from Scratch</p>
      </Card>
      <Card children = 'Shivani P'>
        <h1>Experience makes you better</h1> 
      </Card> */}
    </div>
  )
}

export default App

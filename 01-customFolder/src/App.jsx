import React from 'react'
import Card from './components/Card';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div> 
      <Navbar/>
      <div className="parent">
        <Card user='Shivani Prajapati' age={19} img='https://plus.unsplash.com/premium_photo-1761359334133-29f3e6fe1a0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' /> 
        <Card user='Rakshita Singh' age={20} img='https://images.unsplash.com/photo-1762751358910-345cde48bf9c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM4fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D' /> 
        <Card user='Subham Sharma' age={23} img='https://plus.unsplash.com/premium_photo-1748204460747-165461dde421?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEwNHxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8'/> 
      </div>
      
    </div>
  )
}

export default App

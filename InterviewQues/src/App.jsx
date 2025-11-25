import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Interview1 from './components/Interview1'
import Interview3 from './components/interview3'

function App() { 

  return (
    <>
       {/* we can see that only last parent will apear hear from interview1 component */}
       <Interview1/> 
       <Interview3/>

    </>
  )
}

export default App

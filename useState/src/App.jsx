
import React , {useState} from 'react'
import Counter from './component/Counter';
import AdvanceUseState from './component/AdvanceUseState';
import BatchUpdate from './component/BatchUpdate';

const App = () => {
  // let a = 20; // you cannot change it directly , you have to use useState hook
 
  const [userName , setUserName] = useState('');  

  return (
    <div className='box'>
     
      <Counter/> 
      <input onChange={(e) =>{  
        setUserName(e.target.value)
      }} type="text" placeholder='Enter your name' />
      <h1>UserName is {userName}</h1> 
      <AdvanceUseState/>
      <BatchUpdate/>
    </div>
  )
}

export default App

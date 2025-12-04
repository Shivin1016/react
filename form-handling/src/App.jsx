import React from 'react'
import FormBasic from './components/FormBasic';
import FormReact from './components/FormReact';

const App = () => {
  const submitForm = (e) =>{
    e.preventDefault();
    console.log('form Submitted');
  }
  return (
    <div className='bg-gray-900 h-screen w-full overflow-x-hidden '>
      {/* <FormBasic/> */}
      <FormReact/>
    </div>
  )
}

export default App

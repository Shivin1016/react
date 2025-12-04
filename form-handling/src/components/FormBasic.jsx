import React from 'react'

const FormBasic = () => {
  const submitForm = (e) =>{
    e.preventDefault();
    console.log('form Submitted');
  }
  return (
    <div className='my-2 mx-4 h-full w-full'>
      <form onSubmit={(e) =>{
        submitForm(e);
      }} className='mx-10 w-2/3 px-4  py-6 bg-gray-600 flex flex-col gap-4 text-teal-50 '>
        <input className='w-2/3 text-2xl border-2 border-pink-600 outline-0 px-4 py-2 mx-2' type="text" placeholder='Enter Your Name'/> 
        <button className='text-2xl w-1/5 rounded-3xl border-4 border-white px-4 py-2 '>Submit</button>
      </form>
    </div>
  )
}

export default FormBasic

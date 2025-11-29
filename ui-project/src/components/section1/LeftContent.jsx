import React from 'react' 
import 'remixicon/fonts/remixicon.css'

const LeftContent = () => {
  return (
    <div className='h-full w-1/3 flex justify-between flex-col self-start'> 
       <div className='flex flex-col gap-10 p-6'>
        <h3 className='text-4xl font-bold leading-[1.1]'>Prospective <br/> <span className='text-gray-400 '>customer</span> <br/> <span>
          Segmentation</span></h3>
          <p  className='text-xl font-medium text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni saepe, quae distinctio necessitatibus est dignissimos ratione inventore perferendis sapiente ut.</p>
       </div>
       <div className='text-8xl'>  
        <i className="ri-arrow-right-up-line"></i>
       </div>
    </div>
  )
}

export default LeftContent 
 
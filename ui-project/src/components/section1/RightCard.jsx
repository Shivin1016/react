import React from 'react'

const RightCard = (props) => { 
  return (
    <div className='h-full w-70 flex shrink-0 rounded-4xl overflow-hidden relative bg-gray-800 '>
        {/* overlay */}
        <div className='absolute inset-0 bg-black/25'></div>
      <img className='h-full w-full object-cover ' src={props.img} alt="" />
      <div className='absolute inset-0 flex flex-col justify-between p-8 top-0 left-0 h-full w-full'>
        <h2 className='h-11 w-11 flex items-center justify-center font-semibold text-3xl bg-white rounded-full'>
            {props.id + 1}
        </h2>
        <div className='flex flex-col justify-between gap-5'>
            <p className='text-gray-100 text-shadow-2xs mb-5 tracking-wider font-medium'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sint sed iure magnam iusto.</p>
            <div className=' flex justify-between items-center  '>
                <button className={`${props.color} text-gray-100 py-2 px-3 text-lg rounded-full font-medium`}>
                    {props.tag}
                </button>
                <button className={`${props.color} text-gray-100 px-3 py-2 text-lg rounded-full`}><i className="ri-arrow-right-line text-3xl"></i></button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard 
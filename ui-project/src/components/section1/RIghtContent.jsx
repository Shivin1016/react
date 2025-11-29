import React from 'react'
import RightCard from './RightCard'

const RIghtContent = (props) => {
  return (
    <div id='right'  className='h-full w-4/3 overflow-x-auto flex flex-nowrap gap-5'>
       {props.users.map(function(elem , idx){
        return <RightCard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag}/>
       })}
    </div>
  )
}

export default RIghtContent

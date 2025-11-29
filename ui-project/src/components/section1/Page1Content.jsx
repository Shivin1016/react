import React from 'react'
import LeftContent from './LeftContent'
import RIghtContent from './RIghtContent'

const Page1Content = (props) => {
  return (
    <div className='pb-20 pt-6 flex gap-15 items-center px-13  h-[90vh] mb-10 '> 
        <LeftContent/>
        <RIghtContent users={props.users}/>
    </div>
  )
}

export default Page1Content

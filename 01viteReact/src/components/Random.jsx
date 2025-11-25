import React from 'react'

const Random = () => {
    let rand = Math.random() * 100;
  return (
    <div>
      <h1 style ={{'backgroundColor' : '#776691'}} >Random Number is : {Math.round(rand)}</h1>
      
    </div>
  )
}

export default Random

import React from 'react'

const Hello = () => {
    let myName = "Shiavni";
    let fullName = ()=>{
        return `My full Name is ${myName}`;
    }
  return (
    <div>
      Hello this is the future Speaking . I am Your Master {fullName()}
    </div>
  )
}

export default Hello

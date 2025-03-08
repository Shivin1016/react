import React from 'react'

const AppCurrent = () => {
    let date = new Date();

  return (
    <p className = "lead">
      This is the current time :{date.toLocaleDateString()} - {date.toLocaleTimeString()}
    </p>
  )
}

export default AppCurrent

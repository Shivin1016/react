import React from 'react'
import "./Cards.css"

const Cards = (props) => {
  return (
    <div className = 'card'>
      <h1>Title of the {props.title}</h1>
      <img id='flagImg' src={props.image} alt="error" />
      {props.children}
      <p>{props.desc}</p>
    </div>
  )
}

export default Cards

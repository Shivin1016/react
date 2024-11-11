/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import codePic from "../assets/codePic.jpg";
import React from "react";
import propTypes from "prop-types";
import "./UserCard.css";

const UserCard = (props) => {
  return (
    <div className="user-container" style = {props.style}>
      <p id="user-name">{props.name}</p>
      <img id="user-img" src={props.image} alt="shiv" />
      <p id="user-desc">Description of {props.desc}</p>
    </div>
  );
};
 

export default UserCard;


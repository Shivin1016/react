import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={props.img}
        alt="profile"
      />
      <h1>{props.user}</h1>
      <p>
        I am {props.age} Year Old.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, at.
      </p>
      <button>view profile</button>
    </div>
  );
};

export default Card;

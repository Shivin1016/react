import React from "react";

const Comp1 = (props) => {
  return (
    <div>
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>Name state Variable ki value inside {props.title} : {props.name}</p>
    </div>
  );
};

export default Comp1;

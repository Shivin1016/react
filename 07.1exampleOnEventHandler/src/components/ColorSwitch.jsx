import React from "react";

const ColorSwitch = (props) => {
  return (
    <div onClick={(e)=>{
        e.stopPropagation();
    }}>
      <button onClick={props.onChangeColor}>Change Color</button>
    </div>
  );
};

export default ColorSwitch;

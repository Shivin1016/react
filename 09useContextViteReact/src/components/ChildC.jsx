import React from "react";
import { UserContext } from "../App";
import { useContext } from "react";
import { themeContext } from "../App";
import { useState } from "react";
import './ChildC.css'
const ChildC = () => {
  const user = useContext(UserContext);
  const {theme , setTheme} = useContext(themeContext);
  function toggleTheme(){
     if(theme == 'Light'){
       setTheme('Dark');
     }else{
      setTheme('Light');
     }
  }
  return (
    <div className = 'box'>
        <h1>Data : {user.name}</h1>
        <button onClick={toggleTheme} >
            Change theme : {theme}
        </button>
    </div>
  )
};

export default ChildC;

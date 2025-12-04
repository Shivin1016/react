import React, { useState } from 'react'

const AdvanceUseState = () => {
    const [num, setNum] = useState(10);
    const [user , setUser] = useState({name : "shivani" , age:22});
    const [arr , setArr] = useState([10,20,30]);

    const makeCopy = () =>{
        // const newUser = {...user};
        // newUser.name = 'Maharishi';
        // newUser.age = 50;
        // setUser(newUser); 
        setUser(prev =>({...prev , age:50}));

        // for array
        const newArr = [...arr];
        newArr.push(40);
        setArr(newArr);
    }
  return (
    <div>
      <h1>{num} <br/> {user.name} <br/> {user.age} <br/> {arr} </h1>
      <button onClick={() =>{
        // As setNum function is Asychronous function so , it's update num after some time and our console runs without any delay so , it's print un updated num value in console but In UI you will get update immediatly
        setNum(num + 1);  
        // setNum(num) set num with the same value then no re-render on UI
        console.log(num);
      }}>Click</button>
      <button onClick={makeCopy}>Make Copy of user</button>
    </div>
  )
}

export default AdvanceUseState

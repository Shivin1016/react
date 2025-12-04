import React from "react";

const App = () => {
  // local storage
  // localStorage.clear(); // clear local storage

  //to set Item use setItem
  // localStorage.setItem('user','shivani');
  // localStorage.setItem('age','23');

  // //to get item use getItem
  // const user = localStorage.getItem('user');
  // const age = localStorage.getItem('age');
  // console.log(user ," is " , age , "old");

  // //to remove item use removeItem
  // localStorage.removeItem('user');
  // localStorage.removeItem('age');

  //how to store object and how to execute that methods
  /*
  const user = {
    username: "Shivani",
    age: 18,
    city: "Noida",
  };
  localStorage.setItem("user", JSON.stringify(user)); // alwas stores value in string form

  const userGet = localStorage.getItem("user");
  console.log(userGet); //it will give in form of string

  //so get in original form using parse string into object--> that is onject form
  console.log(JSON.parse(userGet));
  */

  //how to work on arrays 
  const arr = [
    {
      username: "Shivani",
      age: 18,
      city: "Noida",
    },
    {
      username: "Harshit",
      age: 20,
      city: "Bengleru",
    },
  ];
  //store in form of strings
  localStorage.setItem('arr' ,JSON.stringify(arr));
  
  const get = localStorage.getItem('arr');
  const originalArr = JSON.parse(get); //convert to array
  console.log(originalArr[1]);
  
  

  return <div>App</div>;
};

export default App;

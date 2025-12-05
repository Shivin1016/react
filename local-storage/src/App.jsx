import React, { useState } from "react";
import axios from "axios";

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
  /*
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
  */

  //using fetch
  /*
  // async function getData(){
  //   // console.log('Data A Gaya');
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  //   console.log(response); 
  // }
  const getData = async() =>{
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
  }
  */

  //using axios
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await axios.get("https://picsum.photos/v2/list");
    console.log(response.data);
    setData(response.data);
  };

  return (
    <div className="min-h-screen px-4 py-6 flex flex-col items-center gap-5 text-white bg-black">
      <h1 className="text-3xl font-medium p-2">
        Intro To <span className="text-4xl font-bold text-purple-800">API</span>{" "}
        Calling
      </h1>
      <button
        className="px-4 py-2 rounded-2xl text-2xl bg-purple-800 text-white transition-all hover:bg-white hover:text-purple-800 border-none outline-none"
        onClick={getData}
      >
        Get Data
      </button>
      <div className="mx-auto my-2 h-full rounded-2xl bg-purple-300 w-9/10">
        <div className="m-6 flex flex-wrap gap-3 justify-center items-center ">
          {data.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="bg-purple-700 px-4 py-6 flex flex-col gap-4 items-center w-60 h-60 rounded-2xl transition-all hover:-translate-y-1.5 hover:shadow-purple-600 hover:shadow-2xl"
              >
                <h3 className="text-2xl font-medium leading-tight text-center">
                  {elem.author}
                </h3>
                <img
                  className="w-40 h-40 rounded-2xl"
                  src={`${elem.download_url}/?random=${idx + 1}`}
                  alt="alt"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

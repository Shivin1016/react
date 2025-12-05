import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./component/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    console.log(response.data);

    setUserData(response.data);
  };

  useEffect(function () {
    getData();
  }, [index]); // dependancy is index ==> jabjab index change ho to ye data leke aye server side se 

  const userDataLen = userData.length;

  return (
    <div className="relative py-2 px-4 min-h-screen bg-gray-950 text-gray-50 overflow-x-hidden"> 
      <div className="mx-auto my-4 px-6 py-4 flex flex-col items-center gap-4">
        {/* <button
          onClick={() => {
            getData();
          }}
          className="absolute top-5 left-5 bg-green-600 cursor-pointer text-gray-50 px-4 py-2 rounded active:scale-95 text-2xl font-medium transition-all hover:bg-gray-100 hover:text-green-600 hover:font-bold hover:shadow-green-400 hover:shadow-2xl outline-none border-none"
        >
          Get Data
        </button> */}
        <h1 className="text-center bg-gray-300 rounded inline-block px-4 py-2  text-3xl font-bold leading-tight text-teal-700">
          Your Gallery
        </h1>
        <div className="flex flex-wrap justify-center items-center px-4 py-6 my-2 gap-5">
          {userDataLen > 0 ? (
            userData.map(function (elem, idx) {
              return (
                <Card elem={elem} key={idx}/>
              );
            })
          ) : (
            <h3 className="text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold">Loading.....</h3>
          )}
        </div>
        {userDataLen > 0 && (
          <div className="flex justify-center items-center gap-10 p-4 mx-2 my-4">
            <button
              onClick={() => { 
                if(index > 1){
                  setIndex(index - 1);
                  setUserData([]);
                }
              }}
              className={`bg-green-600 text-gray-100 ${index > 1 ? 'active:scale-95' : 'opacity-50'} rounded text-center px-4 py-2 text-lg cursor-pointer font-semibold`}
            >
              Prev
            </button>
            <h4 className="text-lg font-semibold leading-snug">Page {index}</h4>
            <button
              onClick={() => { 
                setIndex(index + 1);
                setUserData([]);
              }}
              className="bg-green-600 text-gray-100 active:scale-95 rounded text-center px-4 py-2 text-lg cursor-pointer font-semibold"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;

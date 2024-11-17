import React, { useState ,useEffect } from "react";

const LogerComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("component render or count changed", count);
  });

  return (
    <div>
      <h1>Couunt : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}>
        Increament
      </button>
    </div>
  );
};

export default LogerComponent;

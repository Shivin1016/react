import React, { useState } from 'react'

const BatchUpdate = () => {
    const [number, setNumber] = useState(0);
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={() =>{ 
        //it only works only single time
        // setNumber(number + 1);
        // setNumber(number + 1);
        // setNumber(number + 1);

        //but if we want that it works at multple times then we can write it as
        setNumber(prev =>(prev + 1));
        setNumber(prev =>(prev + 1));
        setNumber(prev =>(prev + 1));
      }}>Click</button>
    </div>
  )
}

export default BatchUpdate

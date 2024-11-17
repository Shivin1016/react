import React, { useState ,useEffect } from 'react'

const MultiEffectComponent = () => {
    const [count , setCount] = useState(0);
    const [seconds , setSeconds] = useState(0);

    useEffect(() => { 
        console.log('Count Changed ' , count);
    }, [count])
    
    useEffect(() => {
        const intervals = setInterval(()=>{
            console.log("Set Intervals Started")
            setSeconds(prevSecond => prevSecond + 1)
        },1000)

        return ()=>{
            console.log("time to stop")
            clearInterval(intervals)
        } 
    }, [])
    

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={()=>setCount(count + 1)}>Incrrements count</button>
      <h2>Second : {seconds}</h2>
    </div>
  )
}

export default MultiEffectComponent

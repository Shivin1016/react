import React, { useState ,useEffect} from 'react'

const TimerComponent = () => {
    const [seconds , SetSeconds] = useState(0);

    useEffect(() => {
       const intervals = setInterval(()=>{
        console.log('SetInterval Has Started')
        SetSeconds(prevSeconds => prevSeconds + 1)
       },1000);

       //cleanUp function
       return ()=>{
        console.log("Time to stop")
        clearInterval(intervals)
       }
    }, [])
    
  return (
    <div>
      <h1>Seconds :{seconds}</h1>
    </div>
  )
}

export default TimerComponent;



import './App.css';
import { useEffect, useRef, useState } from 'react'

function App() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const timer = useRef()


  // useEffect(()=>{
  //   handleStart()
  // },[])

  const handleStart = () => {
    if (timer.current) { return }
    timer.current = setInterval(() => {
      setSeconds(prev => {
        // console.log(prev)
        if (prev == 59) {
          setMinutes(minutes + 1)
          setSeconds(0)
        }
        return prev + 1
      })
    }, 1000)
}

  const handleStop = () => {
    clearTimeout(timer.current)
    timer.current = null
  }

  const handleReset = () => {
    setMinutes(0)
    setSeconds(0)
    clearTimeout(timer.current)
    timer.current = null
  }


  return (
    <div className="App">
      <h1>Timer</h1>
      <h1>{minutes < 10 ? "0" + minutes : minutes}:{seconds < 10 ? "0" + seconds : seconds}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;

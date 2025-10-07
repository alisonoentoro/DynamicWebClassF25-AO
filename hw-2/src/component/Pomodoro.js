import { useState, useRef, useEffect } from "react"
import Button from "../component/Button"

function Pomodoro() {
  const [timeLeft, setTimeLeft] = useState(1500)
  const intervalRef = useRef(null)

  function startTimer() {
    if (intervalRef.current !== null) return
    intervalRef.current = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(intervalRef.current)
          intervalRef.current = null
          return 0
        }
        return prevTimeLeft - 1;
      });
    }, 1000);
  }

  function stopTimer() {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }

  function resetTimer() {
    stopTimer()
    setTimeLeft(1500)
  }

  // Cleanup interval when component unmounts
  useEffect(() => {
    return () => stopTimer()
  }, []);

  return (
    <div className="flex flex-col items-center p-16 rounded-lg m-4">
      <h1 className="mb-4 text-4xl">Pomodoro Timer</h1>
      <div className="text-6xl font-mono">
        <span>{String(Math.floor(timeLeft / 60)).padStart(2, "0")}</span>
        <span>:</span>
        <span>{String(timeLeft % 60).padStart(2, "0")}</span>
      </div>
      <div className="flex gap-4 m-4">
        <Button primary onClick={startTimer}>Start</Button>
        <Button secondary onClick={stopTimer}>Stop</Button>
        <Button onClick={resetTimer}>Reset</Button>
      </div>
    </div>
  );
}

export default Pomodoro;
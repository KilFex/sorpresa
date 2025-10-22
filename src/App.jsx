import { useState, useEffect } from "react";
import Countdown from "./components/Countdown";
import Timeline from "./components/Timeline";

export default function App() {
  const targetDate = new Date("2025-10-27T00:00:00").getTime();  
  const [timeLeft, setTimeLeft] = useState(targetDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(targetDate - Date.now());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft > 0 ? <Countdown timeLeft={timeLeft} /> : <Timeline />;
}

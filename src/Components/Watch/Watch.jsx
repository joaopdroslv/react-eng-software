import React, { useState, useEffect } from "react";
import "./Watch.css";

export default function Watch() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p className="current-time">{currentTime.toLocaleTimeString()}</p>;
}

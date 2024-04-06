import React, { useState, useEffect, useRef } from 'react';

const Countdown = ({ initialTime }) => {
  const [time, setTime] = useState(initialTime);
  const [running, setRunning] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  const startTimer = () => {
    if (!running && time > 0) {
      timer.current = setInterval(() => {
        setTime(prevTime => prevTime - 1);
      }, 1000);
      setRunning(true);
    }
  };

  const handlePause = () => {
    clearInterval(timer.current);
    setRunning(false);
  };

  const handleReset = () => {
    clearInterval(timer.current);
    setTime(initialTime);
    setRunning(false);
  };

  return (
    <div>
      <h2 style={{ fontSize: '24px', marginBottom: '10px' }}>Countdown: {time} Seconds</h2>
      <button style={buttonStyle} onClick={startTimer}>Start</button>
      <button style={buttonStyle} onClick={handlePause}>Pause</button>
      <button style={buttonStyle} onClick={handleReset}>Reset</button>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: 'skyblue',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  margin: '5px',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Countdown;

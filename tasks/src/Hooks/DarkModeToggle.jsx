import React, { useRef } from 'react';

const DarkModeToggle = () => {
  const bgRef = useRef();
  const textRef = useRef();

  const toggleDarkMode = () => {
    if (bgRef.current.style.backgroundColor === 'black') {
      bgRef.current.style.backgroundColor = 'white';
      textRef.current.style.color = 'black';
    } else {
      bgRef.current.style.backgroundColor = 'black';
      textRef.current.style.color = 'white';
    }
  };

  return (
    <div ref={bgRef} style={{ backgroundColor: 'white', padding: '20px' }}>
      <h1 ref={textRef}>Dark Mode Toggle</h1>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
};

export default DarkModeToggle;

// MatrixBackground.js
import React, { useEffect, useState } from 'react';
import './MatrixBackground.css';

const MatrixBackground = () => {
  const [matrixChars, setMatrixChars] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMatrixChars((prevChars) => {
        const newChar = {
          id: Date.now(),
          char: Math.random() < 0.5 ? '0' : '1',
          left: `${Math.random() * 100}vw`,
          animationDuration: `${Math.random() * 3 + 2}s`,
        };

        return [...prevChars, newChar];
      });
    }, 150);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="matrix-container">
      {matrixChars.map(({ id, char, left, animationDuration }) => (
        <span key={id} className="matrix-character" style={{ left, animationDuration }}>
          {char}
        </span>
      ))}
    </div>
  );
};

export default MatrixBackground;

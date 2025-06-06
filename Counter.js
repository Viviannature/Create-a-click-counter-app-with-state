import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const limit = 10;

  const handleIncrease = () => {
    setCount(prev => prev + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="counter-container">
      <h2>Count: {count}</h2>

      <div className="button-group">
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease} disabled={count === 0}>
          Decrease
        </button>
      </div>

      {count >= limit && (
        <p className="limit-message">🎉 You’ve reached the limit!</p>
      )}
    </div>
  );
}

export default Counter;

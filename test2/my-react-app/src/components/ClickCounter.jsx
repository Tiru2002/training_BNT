import React, { useState } from "react";

function ClickCounter() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    if (count >= 9) {
      setCount(0);
    } else {
      setCount(prev => prev + 1);
    }
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <p>React Question 12</p>
      <h2>Counter: {count}</h2>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickCounter;

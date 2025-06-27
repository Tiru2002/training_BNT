import React, { useState } from 'react';

function ToggleMessage() {
  const [isHello, setIsHello] = useState(true);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <p>React Question 2</p>
      <p>{isHello ? "Hello" : "Welcome Back"}</p>
      <button onClick={() => setIsHello(!isHello)}>
        Toggle
      </button>
    </div>
  );
}

export default ToggleMessage;

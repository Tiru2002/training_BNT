import React, { useState } from 'react';

function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
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
      <p>React Question 7</p>
      <h2>Controlled Input Example</h2>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder="Enter your text"
      />
      <p>You typed: {inputValue}</p>
    </div>
  );
}

export default ControlledInput;

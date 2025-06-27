import React, { useState } from 'react';

function CheckboxMessage() {
  const [checked, setChecked] = useState(false);

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    }} >
      <p>React Question 6</p>
      <label>
        <input
          type="checkbox"
          onChange={(e) => setChecked(e.target.checked)}
        />
        {" "}Check me
      </label>

      {checked && <p>You checked the box!</p>}
    </div>
  );
}

export default CheckboxMessage;

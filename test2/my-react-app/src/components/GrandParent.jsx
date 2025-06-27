import React from 'react';
import Parent from './parent';

function GrandParent() {
  const msg = "Hello from GrandParent";

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <p>React Question 4</p>
      <h1>This is GrandParent</h1>
      <Parent message={msg} />
    </div>
  );
}

export default GrandParent;

import React from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      textAlign: 'center'
    }}>
      <p>React Question 3</p>
      <h1>This is the Parent</h1>
      <ChildComponent message="Good morning" />
    </div>
  );
}

export default ParentComponent;

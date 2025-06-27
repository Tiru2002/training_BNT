import React, { useState } from 'react';

function ItemList() {
  const [items, setItems] = useState(['Apple', 'Banana', 'Orange']);

  const handleDelete = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
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
      <p>React Question 10</p>
      <h2>Item List</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} &nbsp;
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;

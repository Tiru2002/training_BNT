import React, { useState } from 'react';

function TodoApp() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() !== '') {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  const handleDelete = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
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
      <p>React Question 11</p>
      <h2>Todo App</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} &nbsp;
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

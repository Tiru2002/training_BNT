import React, { useState } from 'react';
import InputField from './InputField';

function InputFieldUsed() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '400px', margin: 'auto' }}>
      <p>React Question 8</p>

      <InputField
        label="First Name"
        placeholder="Enter your first name"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />

      <InputField
        label="Email"
        placeholder="Enter your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />

      <p><strong>Entered Name:</strong> {formData.firstName}</p>
      <p><strong>Entered Email:</strong> {formData.email}</p>
    </div>
  );
}

export default InputFieldUsed;

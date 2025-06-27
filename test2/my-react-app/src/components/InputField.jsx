function InputField({ label, placeholder, name, onChange }) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
      </label>
      <br />
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;

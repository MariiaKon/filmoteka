import { Field } from './input.styled';

function Input({ type, name, placeholder, required = false, onChange, value }) {
  return (
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;

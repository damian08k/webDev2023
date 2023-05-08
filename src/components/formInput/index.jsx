import "./index.css";

const FormInput = ({
  type,
  name,
  value,
  onChange,
  placeholder,
  required,
  disabled,
  className,
  ariaLabel,
}) => {
  return (
    <input
      className={`formInput ${className}`}
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      aria-label={ariaLabel}
    />
  );
};

export default FormInput;

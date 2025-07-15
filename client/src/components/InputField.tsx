import { InputFieldProps } from "../types/types";

const InputField = ({
  type,
  name,
  value,
  placeholder,
  onChange,
  options,
}: InputFieldProps) => {
  if (type === "dropdown" && options) {
    return (
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border text-slate-800 font-bold rounded-sm shadow-sm shadow-gray-800/30"
        required
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    );
  }

  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-2 border  text-slate-800 font-bold rounded-sm shadow-sm shadow-gray-800/30"
      required
    />
  );
};

export default InputField;

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
        className="w-full py-4 p-2 border-0 text-md bg-white text-slate-900 font-bold rounded-md shadow-md shadow-gray-800/30"
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
      className="w-full py-3 p-2 mb-2 border-0 text-md bg-white text-slate-900 font-bold rounded-md shadow-md shadow-gray-800/30"
      required
    />
  );
};

export default InputField;

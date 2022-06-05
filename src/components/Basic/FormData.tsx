type FormDataProps = {
  id: string;
  value: string | number;
  onChange: (event: { target: { name: string; value: string } }) => void;
  type?: string;
  placeholder?: string;
  className?: string;
  labelName?: string;
  rows?: number;
  options?: { value: string; name: string }[];
};

export const Input = ({
  id,
  value,
  onChange,
  type = "text",
  placeholder = "",
  className = "",
  labelName = "",
}: FormDataProps) => {
  return (
    <>
      {labelName && (
        <label htmlFor={id} className="block text-gray-700 uppercase font-bold">
          {labelName}
        </label>
      )}
      <input
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ${className}`}
      />
    </>
  );
};

export const TextArea = ({
  id,
  value,
  onChange,
  placeholder = "",
  className = "",
  labelName = "",
  rows = 2,
}: FormDataProps) => {
  return (
    <>
      {labelName && (
        <label htmlFor={id} className="block text-gray-700 uppercase font-bold">
          {labelName}
        </label>
      )}
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        rows={rows}
        placeholder={placeholder}
        className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md overflow-hidden ${className}`}
      />
    </>
  );
};

export const Select = ({
  id,
  value,
  onChange,
  options,
  className = "",
  labelName = "",
}: FormDataProps) => {
  return (
    <>
      {labelName && (
        <label htmlFor={id} className="block text-gray-700 uppercase font-bold">
          {labelName}
        </label>
      )}
      <select
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        className={`border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md ${className}`}
      >
        {options &&
          options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.name}
            </option>
          ))}
      </select>
    </>
  );
};

import { ChangeEvent, FunctionComponent } from "react";

interface BaseProps {
  title: string;
  htmlFor?: string;
  placeholder?: string;
  name: string;
}

interface Props extends BaseProps {
  type: "text" | "number";
  required?: boolean;
  aria?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

interface SelectProps extends BaseProps {
  options: { title: string; value: string }[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export const Input: FunctionComponent<Props> = ({
  type,
  title,
  required,
  aria,
  htmlFor,
  placeholder,
  onChange,
  name,
}) => (
  <div className="mb-2">
    <label
      htmlFor={htmlFor}
      className="flex flex-col items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {title}
    </label>
    <input
      type={type}
      aria-describedby={aria}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder={placeholder}
      required={required}
      min="0"
      onChange={onChange}
      name={name}
    />
  </div>
);

export const Select: FunctionComponent<SelectProps> = ({
  htmlFor,
  title,
  options,
  placeholder,
  onChange,
  name,
}) => (
  <div className="mb-2">
    <label
      htmlFor={htmlFor}
      className="flex flex-col items-start mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      {title}
    </label>
    <select
      onChange={onChange}
      name={name}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
      <option selected disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option value={option.value}>{option.title}</option>
      ))}
    </select>
  </div>
);

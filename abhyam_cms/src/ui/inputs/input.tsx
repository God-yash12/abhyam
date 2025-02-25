import React, { forwardRef } from 'react';

interface InputfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  className?: string;
}

const Inputfield = forwardRef<HTMLInputElement, InputfieldProps>(
  ({ label, required, className, placeholder, type = 'text', ...rest }, ref) => {
    return (
      <div className="relative">
        <label
          htmlFor={label}
          className="absolute left-1 top-2 text-sm text-gray-600 transition-all transform -translate-y-1/2 scale-100 origin-[0] group-focus-within:scale-75 group-focus-within:top-1 group-focus-within:text-blue-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-gray-500"
        >
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={label}
          placeholder={placeholder}
          required={required}
          className={`peer block w-full px-3 py-2 mt-7 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300 focus:border-blue-300 transition-all ${className}`}
          {...rest}
        />
      </div>
    );
  }
);

Inputfield.displayName = 'Inputfield';

export default Inputfield;

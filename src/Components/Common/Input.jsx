import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      placeholder = "",
      className = "",
      id,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <div className="flex flex-col gap-1">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-slate-700">
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          type={type}
          placeholder={placeholder}
          className={`
            px-4 py-2
            text-sm text-slate-800
            border rounded-lg
            bg-white
            placeholder:text-slate-400
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition
            ${error ? "border-red-500 focus:ring-red-500" : "border-slate-300"}
            ${className}
          `}
          {...props}
        />

        {error && <span className="text-xs text-red-500 mt-1">{error}</span>}
      </div>
    );
  }
);

export default Input;

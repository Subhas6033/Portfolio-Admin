import React from "react";

const Button = ({
  children,
  className = "",
  type = "button",
  disabled = false,
  onClick,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        px-5 py-2
        text-sm font-medium
        rounded-lg
        bg-blue-600 text-white
        hover:bg-blue-700
        hover:cursor-pointer
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transition-all duration-200
        disabled:bg-gray-400 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

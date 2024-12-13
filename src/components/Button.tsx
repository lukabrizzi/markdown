import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "text" | "contained" | "outlined";
  color?: "primary" | "secondary" | "danger";
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "contained",
  color = "primary",
  disabled = false,
  className = "",
}) => {
  const baseStyles =
    "rounded-md px-4 w-64 py-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    text: "bg-transparent hover:bg-opacity-10",
    contained: "text-white",
    outlined: "border-2",
  };

  const colors = {
    primary:
      "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500 border-blue-500",
    secondary:
      "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500 border-gray-500",
    danger:
      "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500 border-red-500",
  };

  const disabledStyles = "opacity-50 cursor-not-allowed";

  const selectedVariant =
    variant === "outlined"
      ? `${variants[variant]} ${colors[color]}`
      : `${variants[variant]} ${colors[color]}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${selectedVariant} ${
        disabled ? disabledStyles : ""
      } ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

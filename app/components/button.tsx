import type React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-md bg-primaryBlue px-4 py-2 text-white hover:bg-blue-700 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;

"use client";

import React from "react";

interface ButtonProps {
  onClick?: () => void;
  label?: string;
  className?: string;
  gradient?: string; // use this instead of `color`
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  label = "Next",
  className = "",
  gradient = "from-blue-400 to-blue-700", // default gradient
  disabled = false,
}) => {
  return (
    <div className={`w-full sm:w-full  flex justify-center ${className}`}>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`w-full sm:w-auto px-10 py-2 bg-gradient-to-r ${gradient} rounded-full text-white font-medium shadow-md hover:scale-105 transition`}
      >
        {label}
      </button>
    </div>
  );
};

export default Button;

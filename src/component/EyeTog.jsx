"use client";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
export default function EyeTog({ onToggle }) {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible(!isVisible);
    onToggle(!isVisible);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
      aria-label="Toggle password visibility"
    >
      {isVisible ? (
        // Eye Slash (hide)
        <FaEyeSlash />
      ) : (
        // Eye (show)
       <FaEye />
      )}
    </button>
  );
}
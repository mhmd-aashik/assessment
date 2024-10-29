"use client";
import React from "react";

const Button = () => {
  return (
    <button
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      onClick={() => location.reload()}
    >
      Refresh
    </button>
  );
};

export default Button;

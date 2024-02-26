import React from "react";

function Input({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Character's name"
    />
  );
}

export default Input;

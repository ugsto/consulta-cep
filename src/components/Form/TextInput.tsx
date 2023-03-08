import React from "react";
import { InputProps } from "./Input";

export function TextInput({
  name,
  id,
  value,
  onChange,
  required,
  placeholder
}: InputProps) {
  return (
    <input
      type="text"
      name={name}
      id={id}
      value={value}
      onChange={onChange}
      required={required}
      placeholder={placeholder}
    />
  );
}

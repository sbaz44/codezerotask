import React from "react";

export default function InputBox({
  name,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <React.Fragment>
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        name={name}
        className={error ? "error" : ""}
      />
      {error && <p className="required">Required</p>}
    </React.Fragment>
  );
}

import React from "react";

export default function Button({ name, onClick, bg, icon }) {
  return (
    <button
      className="btn"
      onClick={onClick}
      style={bg && { backgroundColor: bg }}
    >
      {name}
      {icon && <img src={icon} alt="arrow" />}
    </button>
  );
}

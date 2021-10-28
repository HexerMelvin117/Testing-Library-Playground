import React, { useState } from "react";

const WitchersInput = ({ value, setValue, label, rest }) => {
  const handleChange = (ev) => {
    ev.preventDefault();
    setValue(ev.currentTarget.value);
  };

  return (
    <div>
      <label className="witchers-label">{label}</label>
      <input
        aria-label="witcher-input"
        type="text"
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

export default WitchersInput;

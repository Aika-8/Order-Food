import React from "react";
import "./FormInput.css";
import { Input } from "./Input";

export const FormInput = ({ value, inputType, lableText, id, onChange }) => {
  return (
    <div className="amount">
      <label htmlFor={id} lassName="label-text">
        {lableText}
      </label>
      <Input type={inputType} id={id} value={value} onChange={onChange} />
    </div>
  );
};

import React from "react";

export const OutputBlock = ({ title, value = 0, currency }) => {
  return (
    <div className="output-block">
      <p className="output-block__title">{title}</p>
      <div className="output-block__result">
        <h2>
          {value.toLocaleString(undefined, {
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          })}
        </h2>
        <span className="result__currency">{currency}</span>
      </div>
    </div>
  );
};

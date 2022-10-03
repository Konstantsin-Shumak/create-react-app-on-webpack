import React, { useCallback } from "react";
import RangeInput from "../RangeInput/index.jsx";

export const ImportBlock = ({
  title,
  inputProperty,
  value,
  percent,
  range,
  onInputChange,
  isLoading,
}) => {
  const handleInput = useCallback((event) => {
    const valueString = String(event.target.value);
    const valueNumber = Number(valueString.replace(/\s/g, ""));
    if (valueNumber < range[0]) onInputChange(range[0]);
    else if (valueNumber > range[1]) onInputChange(range[1]);
    else {
      onInputChange(valueNumber);
    }
  }, []);

  return (
    <div className="input-block">
      <p className="input-block__title">{title}</p>
      <div
        className={`input-block__input-content ${isLoading ? "--disable" : ""}`}
      >
        <div className="input-content__input">
          <input
            className="input-number"
            type="text"
            value={value.toLocaleString(undefined, {
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
            disabled={isLoading}
            readOnly={percent}
            onChange={handleInput}
          />
          <span className={`input__span${percent && "-percent"}`}>
            {percent && percent}
            {inputProperty}
          </span>
        </div>
        <RangeInput
          min={range[0]}
          max={range[1]}
          onChange={handleInput}
          value={percent ? percent : value}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

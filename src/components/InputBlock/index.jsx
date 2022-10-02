import React from "react";
import RangeInput from "../RangeInput/index.jsx";

export const ImportBlock = ({
  title,
  inputProperty,
  value,
  percent,
  rangeMin,
  rangeMax,
  onInputChange,
}) => {
  const handleInput = React.useCallback((event) => {
    const value = event.target.value;

    onInputChange(value);
  }, []);

  return (
    <div className="input-block">
      <p className="input-block__title">{title}</p>
      <div className="input-block__input-content">
        <div className="input-content__input">
          <input
            className="input-number"
            type="number"
            value={value}
            onChange={handleInput}
          />
          <span className={`input__span${percent && "-percent"}`}>
            {percent && percent}
            {inputProperty}
          </span>
        </div>
        <RangeInput
          min={rangeMin}
          max={rangeMax}
          onChange={onInputChange}
          value={percent ? percent : value}
          defaultValue={percent ? percent : value}
        />
      </div>
    </div>
  );
};

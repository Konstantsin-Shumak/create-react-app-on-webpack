import React from "react";
import RangeInput from "../RangeInput/index.jsx";

export const ImportBlock = ({
  title,
  inputProperty,
  value,
  rangeMin,
  rangeMax,
  rangeName,
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
          <span className={`input__span-${rangeName}`}>
            {inputProperty === "%" && value}
            {inputProperty}
          </span>
        </div>
        <RangeInput
          min={rangeMin}
          max={rangeMax}
          onChange={onInputChange}
          defaultValue={value}
        />
        {/* <input
          className="input-range"
          type="range"
          min={rangeMin}
          max={rangeMax}
          value={value}
          onChange={handleInput}
        /> */}
      </div>
    </div>
  );
};

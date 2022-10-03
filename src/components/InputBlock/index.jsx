import React, { useCallback } from "react";
import RangeInput from "../RangeInput/index.jsx";
import { formatingNumber } from "../../scripts/formatingNumber.js";
import { reFormatingInputValue } from "../../scripts/reFormatingInputValue.js";

export const ImportBlock = ({
  title,
  inputProperty,
  value,
  percent,
  range,
  onInputChange,
  isLoading,
}) => {
  const handleValidate = useCallback(
    (event) => {
      let valueNumber = reFormatingInputValue(event.target.value);
      if (valueNumber > range[1]) {
        valueNumber = range[1];
      } else if (valueNumber < range[0]) {
        valueNumber = range[0];
      }
      onInputChange(valueNumber);
    },
    [reFormatingInputValue, onInputChange, range]
  );
  const handleOnChange = useCallback(
    (event) => {
      const inputValue = reFormatingInputValue(event.target.value);
      if (isNumber(inputValue)) {
        onInputChange(reFormatingInputValue(inputValue));
      }
    },
    [reFormatingInputValue, onInputChange]
  );

  const isNumber = (inputValue) => /^\d+$/.test(inputValue);

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
            maxLength={10}
            value={formatingNumber(value)}
            disabled={isLoading}
            readOnly={percent}
            onBlur={handleValidate}
            onChange={handleOnChange}
          />
          <span className={`input__span${percent && "-percent"}`}>
            {percent && percent}
            {inputProperty}
          </span>
        </div>
        <RangeInput
          min={range[0]}
          max={range[1]}
          onChange={onInputChange}
          value={percent ? percent : value}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

import React, { useCallback, useRef } from "react";
import RangeInput from "../RangeInput/index.jsx";
import { formatingNumner } from "../../scripts/formatingNumber.js";

export const ImportBlock = ({
  title,
  inputProperty,
  value,
  percent,
  range,
  onInputChange,
  isLoading,
}) => {
  const textInput = useRef(null);

  const handleInputOnCHange = useCallback(
    (event) => {
      const value = reFormatingInputValue(event.target.value);
      onInputChange(value);
    },
    [onInputChange]
  );

  const handleInputValid = useCallback(
    (event) => {
      if (event.key === "Enter" || event.type === "blur") {
        let value = reFormatingInputValue(event.target.value);
        if (valueNumber > range[1]) {
          textInput.current.value = formatingNumner(range[1]);
          valueNumber = range[1];
        }
        if (valueNumber < range[0]) {
          textInput.current.value = formatingNumner(range[0]);
          valueNumber = range[0];
        }
        if (!/^\d+$/.test(valueNumber)) {
          textInput.current.value = formatingNumner(value);
          valueNumber = value;
        }
        onInputChange(valueNumber);
      }
    },
    [value, onInputChange, reFormatingInputValue, textInput]
  );

  return (
    <div className="input-block">
      <p className="input-block__title">{title}</p>
      <div
        className={`input-block__input-content ${isLoading ? "--disable" : ""}`}
      >
        <div className="input-content__input">
          <input
            ref={textInput}
            className="input-number"
            type="text"
            defaultValue={formatingNumner(value)}
            disabled={isLoading}
            readOnly={percent}
            onBlur={handleInputValid}
            onKeyDown={handleInputValid}
          />
          <span className={`input__span${percent && "-percent"}`}>
            {percent && percent}
            {inputProperty}
          </span>
        </div>
        <RangeInput
          min={range[0]}
          max={range[1]}
          onChange={handleInputOnCHange}
          value={percent ? percent : value}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

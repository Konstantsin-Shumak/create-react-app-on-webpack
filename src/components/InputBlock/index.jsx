import React, { useCallback, useRef } from "react";
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
        let valueNumber = reFormatingInputValue(event.target.value);
        if (valueNumber > range[1]) {
          textInput.current.value = formatingNumber(range[1]);
          valueNumber = range[1];
        } else if (valueNumber < range[0]) {
          textInput.current.value = formatingNumber(range[0]);
          valueNumber = range[0];
        } else if (!/^\d+$/.test(valueNumber)) {
          textInput.current.value = formatingNumber(value);
          valueNumber = value;
        }
        onInputChange(valueNumber);
      }
    },
    [value, onInputChange, reFormatingInputValue, textInput, formatingNumber]
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
            defaultValue={formatingNumber(value)}
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

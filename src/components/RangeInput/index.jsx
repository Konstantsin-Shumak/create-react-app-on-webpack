import React from "react";
import Slider from "@mui/material/Slider";
import { styled } from "@mui/material/styles";

const SimpleRange = styled(Slider)(() => ({
  position: "absolute",
  boxSizing: "border-box",
  width: "auto",
  left: "24px",
  right: "24px",
  bottom: 0,
  color: "#ff9514",
  padding: 0,
  height: 2,
  "& .MuiSlider-thumb": {
    height: 20,
    width: 20,
    backgroundColor: "#ff9514",
  },
  "& .MuiSlider-rail": {
    opacity: 0.5,
    backgroundColor: "#bfbfbf",
  },
  "&:hover .MuiSlider-thumb": {
    width: 24,
    height: 24,
  },
  ".css-eg0mwd-MuiSlider-thumb:hover, .css-eg0mwd-MuiSlider-thumb.Mui-focusVisible":
    {
      boxShadow: "0 0 0 0",
    },
  "@media (pointer: coarse)": {
    padding: "0",
  },
}));

const RangeInput = ({ min, max, value, onChange, isLoading }) => {
  return (
    <SimpleRange
      value={value}
      max={max}
      min={min}
      onChange={(event) => onChange(event.target.value)}
      disabled={isLoading}
    />
  );
};

export default RangeInput;

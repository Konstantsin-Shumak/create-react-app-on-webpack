import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

export const Button = ({ onClickButton, isLoading }) => {
  return (
    <div className="button-conainer">
      {isLoading}
      <button
        onClick={onClickButton}
        disabled={isLoading}
        className={`button ${isLoading ? "--disable" : ""}`}
      >
        {isLoading ? (
          <CircularProgress sx={{ color: "#ffffff" }} />
        ) : (
          "Оставить заявку"
        )}
      </button>
    </div>
  );
};

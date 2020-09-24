import React from "react";

export const WeatherOption = (props) => {
  return (
    <div>
      <label htmlFor="">{props.optionType}</label>
      <input type="checkbox" name={props.optionType} id={props.optionType} />
    </div>
  );
};
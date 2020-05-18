import React from "react";

export const Total = (props) => {
  return (
    <p>Number of exercises {props.exercises.reduce((acc, x) => acc + x)}</p>
  );
};

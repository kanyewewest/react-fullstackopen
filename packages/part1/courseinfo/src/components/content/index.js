import React from "react";

function Exercise(props) {
  return (
    <p>
      {props.part} {props.exercises}
    </p>
  );
}

export const Content = (props) => {
  return props.content.map((content) => (
    <Exercise
      key={content.part}
      part={content.part}
      exercises={content.exercises}
    ></Exercise>
  ));
};

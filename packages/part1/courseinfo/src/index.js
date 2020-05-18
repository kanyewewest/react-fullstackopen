import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./components/header";
import { Content } from "./components/content";
import { Total } from "./components/total";

const App = () => {
  const course = {
    name: "Half Stack application development",
    content: [
      {
        part: "Fundamentals of React",
        exercises: 10,
      },
      {
        part: "Using props to pass data",
        exercises: 7,
      },
      {
        part: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name}></Header>
      <Content content={course.content}></Content>
      <Total exercises={course.content.map((x) => x.exercises)}></Total>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

import React from 'react';

export const Total = ({ parts }) => {
  const total = parts.reduce((acc, part) => part.exercises + acc, 0);

  return <p>Total of {total} exercises</p>;
};

import React from 'react';

export const Total = ({ parts }) => {
  return <p>Total of {parts.reduce((acc, part) => part.exercises + acc, 0)}</p>;
};

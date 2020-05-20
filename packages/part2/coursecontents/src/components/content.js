import React from 'react';
import { Part } from './part';

export const Content = ({ parts }) => {
  return (
    <ul>
      {parts.map((part) => (
        <Part key={part.id} part={part}></Part>
      ))}
    </ul>
  );
};

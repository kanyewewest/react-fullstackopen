import React from 'react';

export const PhonebookNumber = ({ name, number }) => {
  return (
    <li>
      {name} {number}
    </li>
  );
};

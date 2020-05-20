import React from 'react';
import { PhonebookNumber } from './phonebook-number';

export const PhonebookNumbers = ({ persons }) => {
  return (
    <ul>
      {persons.map((person) => (
        <PhonebookNumber
          key={person.name}
          name={person.name}
          number={person.number}
        />
      ))}
    </ul>
  );
};

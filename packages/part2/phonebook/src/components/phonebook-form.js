import React, { useState } from 'react';

export const PhonebookForm = ({ persons, setPersons }) => {
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const handleNameChange = (event) => setNewName(event.target.value);
  const handleNumberChange = (event) => setNewNumber(event.target.value);
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (persons.some((person) => person.name === newName)) {
      alert(`${newName} already exists!`);
      return;
    }

    const newPerson = {
      id: persons.length,
      name: newName,
      number: newNumber,
    };

    setPersons(persons.concat(newPerson));
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div>
          Name:{' '}
          <input type="text" value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number:{' '}
          <input type="text" value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

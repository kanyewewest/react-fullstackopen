import React, { useState } from 'react';

export const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456-789' },
    { name: 'Hellas', number: '123-456-789' },
    { name: 'Hell', number: '123-456-789' },
  ]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');
  const filteredPersons = persons.filter((person) =>
    person.name.includes(filter),
  );

  const handleFilterChange = (event) => setFilter(event.target.value);
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
      Filter:{' '}
      <input type="text" value={filter} onChange={handleFilterChange}></input>
      <h2>Phonebook</h2>
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
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filteredPersons.map((person) => (
          <li key={person.name}>
            {person.name} {person.number}
          </li>
        ))}
      </ul>
    </div>
  );
};

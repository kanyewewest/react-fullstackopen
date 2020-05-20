import React, { useState } from 'react';
import { Filter } from './filter';
import { PhonebookForm } from './phonebook-form';
import { PhonebookNumbers } from './phonebook-numbers';

export const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '123-456-789' },
    { name: 'Hellas', number: '123-456-789' },
    { name: 'Hell', number: '123-456-789' },
  ]);
  const [filter, setFilter] = useState('');
  const filteredPersons = persons.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );
  return (
    <div>
      <h2>Filter</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Phonebook</h2>
      <PhonebookForm persons={persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <PhonebookNumbers persons={filteredPersons} />
    </div>
  );
};

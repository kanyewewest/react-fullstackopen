import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Filter } from './filter';
import { PhonebookForm } from './phonebook-form';
import { PhonebookNumbers } from './phonebook-numbers';

export const App = () => {
  const [persons, setPersons] = useState([]);

  const getPersons = () => {
    axios
      .get('http://localhost:3001/persons')
      .then((res) => {
        console.log(res.config.url, res.status, res.data);
        setPersons(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getPersons, []);

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

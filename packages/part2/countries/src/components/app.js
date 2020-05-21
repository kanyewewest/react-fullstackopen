import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Filter } from './filter';
import { Countries } from './countries';

export const App = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = () => {
    axios
      .get('http://localhost:3001/countries')
      .then((res) => {
        console.log(res.config.url, res.status, res.data);
        setCountries(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(getCountries, []);

  const [filter, setFilter] = useState('');
  const filteredCountries = countries.filter((person) =>
    person.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div>
      <h1>Countries</h1>
      <h2>Filter</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <Countries countries={filteredCountries} />
    </div>
  );
};

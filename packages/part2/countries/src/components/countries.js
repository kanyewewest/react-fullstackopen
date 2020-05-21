import React from 'react';
import { Country } from './country';

export const Countries = ({ countries }) => {
  if (countries.length > 10) {
    return <p>Too many matches! specify another filter.</p>;
  } else if (countries.length > 1) {
    return (
      <ul>
        {countries.map((country) => (
          <Country
            key={country.alpha3Code}
            country={country}
            isListItem={true}
          />
        ))}
      </ul>
    );
  } else if (countries.length === 1) return <Country country={countries[0]} />;

  return null;
};

import React, { useState } from 'react';
import { Weather } from './weather';

export const Country = ({ country, isListItem }) => {
  const [toggled, setToggled] = useState(false);
  const handleToggleClick = () => {
    setToggled(!toggled);
  };

  return (
    <>
      {isListItem ? (
        <li>
          {country.name}{' '}
          <button onClick={handleToggleClick}>
            {toggled ? 'collapse' : 'expand'}
          </button>
        </li>
      ) : null}
      {isListItem === undefined || toggled ? (
        <article>
          <h1>{country.name}</h1>
          <p>Capital: {country.capital}</p>
          <p>Population: {country.population}</p>
          <h3>Languages</h3>
          <ul>
            {country.languages.map((language) => (
              <li key={language.name}>{language.name}</li>
            ))}
          </ul>
          <img
            width="300"
            height="200"
            alt={`${country.name} flag`}
            src={country.flag}
          ></img>
        </article>
      ) : null}

      {isListItem === undefined || toggled ? (
        <Weather query={country.capital} />
      ) : null}
    </>
  );
};

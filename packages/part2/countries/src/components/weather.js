import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Weather = ({ query }) => {
  const [weather, setWeather] = useState(undefined);
  const getWeather = () => {
    axios
      .get(
        `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${query}`,
      )
      .then((res) => {
        console.log(res.data);
        setWeather(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getWind = (weatherCurrent) => {
    if (!weatherCurrent) return '';
    return `${weatherCurrent.wind_speed} mph ${weatherCurrent.wind_degree} ${weatherCurrent.wind_dir}`;
  };

  const getIcons = (weatherIcons) => {
    if (!weatherIcons) return null;
    return weatherIcons.map((icon) => (
      <div key="icon">
        <img alt={icon} src={icon}></img>
      </div>
    ));
  };

  useEffect(getWeather, []);

  return (
    <aside>
      <h3>Weather in {query}</h3>
      {weather ? (
        <>
          <p>Temperature: {weather.temperature}</p>
          <p>Wind: {getWind(weather.current)}</p>
          {getIcons(weather.current.weather_icons)}
        </>
      ) : (
        <div>Loading...</div>
      )}
    </aside>
  );
};

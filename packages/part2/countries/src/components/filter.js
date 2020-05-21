import React from 'react';

export const Filter = ({ filter, setFilter }) => {
  const handleFilterChange = (event) => setFilter(event.target.value);

  return (
    <div>
      <input type="text" value={filter} onChange={handleFilterChange}></input>
    </div>
  );
};

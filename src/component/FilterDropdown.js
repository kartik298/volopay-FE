import React from 'react';

const FilterDropdown = ({ filterType, onChange }) => {
  return (
    <select value={filterType} onChange={onChange}>
      <option value="">All</option>
      <option value="burner">Burner</option>
      <option value="subscription">Subscription</option>
    </select>
  );
};

export default FilterDropdown;

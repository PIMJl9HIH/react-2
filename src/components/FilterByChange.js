import React from 'react';

const FilterByChange = ({value, onChange}) =>
  <form>
    <label htmlFor="search-input">Search</label>
    <input
      id="search-input"
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search the site"
    />
  </form>


export default FilterByChange;

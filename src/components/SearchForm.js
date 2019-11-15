import React from "react";

export default function SearchForm(props) {
  const handleChange = e => props.setSearchTerm(e.target.value)
  return (
    <section className="search-form">
     <label htmlFor='search'>Search</label>
      <input
        value={props.searchTerm}
        onChange={handleChange}
        id='search'
        placeholder='search'
        type='text'
        name='search'
      />
    </section>
  );
}

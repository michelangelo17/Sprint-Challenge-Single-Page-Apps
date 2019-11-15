import React from 'react'
import { Container } from '../EmotionalTools'

const SearchForm = props => {
  const handleChange = e => props.setSearchTerm(e.target.value)
  return (
    <Container fd='c' ai='c'>
      <label htmlFor='search'>Search</label>
      <input
        value={props.searchTerm}
        onChange={handleChange}
        id='search'
        placeholder='type your search here!'
        type='text'
        name='search'
      />
    </Container>
  )
}

export default SearchForm

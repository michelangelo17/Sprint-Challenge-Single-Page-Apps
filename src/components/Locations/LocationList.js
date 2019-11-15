import React, { useState, useEffect } from 'react'
import LocationsAPI from '../../apis/LocationsAPI'
import { Container } from '../../EmotionalTools'
import LocationCards from './LocationCards'
import SearchForm from '../SearchForm'

const LocationList = () => {
  const locArray = LocationsAPI()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = locArray.filter(location =>
      location.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm, locArray])

  return (
    <Container fd='c' jc='c' ai='c'>
      <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <LocationCards searchResults={searchResults} />
    </Container>
  )
}

export default LocationList
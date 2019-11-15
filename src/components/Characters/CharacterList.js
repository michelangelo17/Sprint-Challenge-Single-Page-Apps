import React, { useState, useEffect } from 'react'
import CharactersAPI from '../../apis/CharactersAPI'
import { Container } from '../../EmotionalTools'
import CharacterCards from './CharacterCards'
import SearchForm from '../SearchForm'

const CharacterList = () => {
  const charArray = CharactersAPI()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = charArray.filter(character =>
      character.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm, charArray])

  return (
    <Container fd='c' jc='c' ai='c'>
      <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <CharacterCards searchResults={searchResults} />
    </Container>
  )
}

export default CharacterList

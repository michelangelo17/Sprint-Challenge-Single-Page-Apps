import React, { useState, useEffect } from 'react'
import EpisodesAPI from '../../apis/EpisodesAPI'
import { Container } from '../../EmotionalTools'
import EpisodeCards from './EpisodeCards'
import SearchForm from '../SearchForm'

const EpisodeList = () => {
  const epArray = EpisodesAPI()
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState([])

  useEffect(() => {
    const results = epArray.filter(episode =>
      episode.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setSearchResults(results)
  }, [searchTerm, epArray])

  return (
    <Container fd='c' jc='c' ai='c'>
      <SearchForm setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <EpisodeCards searchResults={searchResults} />
    </Container>
  )
}

export default EpisodeList
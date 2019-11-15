import { useEffect, useState } from 'react'
import axios from 'axios'

const CharactersAPI = () => {
  const [characters, setCharacters] = useState([])
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        setCharacters(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])
  return characters
}

export default CharactersAPI

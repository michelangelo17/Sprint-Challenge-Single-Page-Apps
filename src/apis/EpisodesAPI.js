import { useEffect, useState } from 'react'
import axios from 'axios'

const EpisodesAPI = () => {
  const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
        setEpisodes(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])
  return episodes
}

export default EpisodesAPI

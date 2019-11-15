import { useEffect, useState } from 'react'
import axios from 'axios'

const LocationsAPI = () => {
  const [locations, setLocations] = useState([])
  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        setLocations(res.data.results)
      })
      .catch(err => console.log(err))
  }, [])
  return locations
}

export default LocationsAPI

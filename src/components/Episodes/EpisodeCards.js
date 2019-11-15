import React from 'react'
import CardMaker from './CardMaker'
import { Container } from '../../EmotionalTools'

const Cards = props => {
  const epArray = props.searchResults

  return (
    <Container width='100%' fd='r' jc='c' fw='wrap'>
      {epArray.map((episode, index) => (
        <CardMaker
          epName={episode.name}
          aired={episode.air_date}
          episode={episode.episode}
          key={index}
        />
      ))}
    </Container>
  )
}

export default Cards

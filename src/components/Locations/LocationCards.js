import React from 'react'
import CardMaker from './CardMaker'
import { Container } from '../../EmotionalTools'

const Cards = props => {
  const locArray = props.searchResults

  return (
    <Container width='100%' fd='r' jc='c' fw='wrap'>
      {locArray.map((location, index) => (
        <CardMaker
          locName={location.name}
          type={location.type}
          dimension={location.dimension}
          pic={location.image}
          key={index}
        />
      ))}
    </Container>
  )
}

export default Cards

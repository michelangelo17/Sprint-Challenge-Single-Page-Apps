import React from 'react'
import CardMaker from './CardMaker'
import { Container } from '../../EmotionalTools'

const Cards = props => {
  const charArray = props.searchResults
  return (
    <Container width='100%' fd='r' jc='c' fw='wrap'>
      {charArray.map((character, index) => (
        <CardMaker
          charName={character.name}
          status={character.status}
          homeworld={character.origin.name}
          pic={character.image}
          key={index}
        />
      ))}
    </Container>
  )
}

export default Cards
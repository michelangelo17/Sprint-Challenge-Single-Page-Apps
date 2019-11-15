import React from 'react'
import {
  Container,
  H2,
  P,
  ImageW100,
} from '../../EmotionalTools'

const CardMaker = props => {
  return (
    <Container
      fd='c'
      jc='c'
      ai='c'
      width='25%'
      minWidth='300px'
      maxWidth='400px'
      bgColor='second'
      margin='3%'
      br='10px'
      shadow='y'
      p='2%'
    >
      <H2 textAlign='center'>{props.charName}</H2>
      <div>
        <ImageW100 round='50%' alt={props.charName} src={props.pic} />
      </div>
      <P textAlign='center'>{props.status}</P>
      <P textAlign='center'>Homeworld: {props.homeworld}</P>
    </Container>
  )
}

export default CardMaker

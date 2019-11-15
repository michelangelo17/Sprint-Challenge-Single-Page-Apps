import React from 'react'
import { Container, H2, P } from '../../EmotionalTools'

const CardMaker = props => (
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
    <H2 textAlign='center'>{props.epName}</H2>
    <P textAlign='center'>Date Aired: {props.aired}</P>
    <P textAlign='center'>Episode Number: {props.episode}</P>
  </Container>
)

export default CardMaker

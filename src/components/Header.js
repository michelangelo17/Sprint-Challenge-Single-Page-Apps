import React from 'react'
import { Route } from 'react-router-dom'
import CharacterList from './Characters/CharacterList'
import WelcomePage from './WelcomePage'
import LocationList from './Locations/LocationList'
import EpisodeList from './Episodes/EpisodeList'
import { EmotionalLink, H1, Container } from '../EmotionalTools'

export default function Header() {
  return (
    <header className='ui centered'>
      <H1 className='ui center'>Rick &amp; Morty Fan Page</H1>
      <Container jc='fe'>
        <EmotionalLink to='/'>Home</EmotionalLink>
        <EmotionalLink to='/characters'>Characters</EmotionalLink>
        <EmotionalLink to='/locations'>Locations</EmotionalLink>
        <EmotionalLink to='/episodes'>Episodes</EmotionalLink>
      </Container>
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' render={props => <CharacterList />} />
      <Route path='/locations' render={props => <LocationList />} />
      <Route path='/episodes' render={props => <EpisodeList />} />
    </header>
  )
}

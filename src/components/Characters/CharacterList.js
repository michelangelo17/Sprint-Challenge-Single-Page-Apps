import React from "react";
import CharactersAPI from "../../apis/CharactersAPI";
import {Container, H1} from '../../EmotionalTools'
import CharacterCards from './CharacterCards'

export default function CharacterList() {
  const charArray = CharactersAPI()
  return (
    <Container fd='c' jc='c' ai='c'>
      <H1>Rick and Morty Characters</H1>
      
      <CharacterCards charArray={charArray} />
    </Container>
  );
}

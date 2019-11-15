import React from "react";
import { H2, Container, ImageW100 } from "../EmotionalTools";

export default function WelcomePage() {
  return (
    <Container fd='c' ai='c'>
        <H2>Welcome to the ultimate fan site!</H2>
        <ImageW100 round='5px'
          className="main-img"
          src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
          alt="rick"
        />
    </Container>
  );
}

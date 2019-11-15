import React from "react";
import { Route } from "react-router-dom";
import CharacterList from "./Characters/CharacterList";
import WelcomePage from "./WelcomePage";
import { EmotionalLink } from "../EmotionalTools";

export default function Header() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <div>
        <EmotionalLink to="/">Home</EmotionalLink>
        <EmotionalLink to="/characters">Characters</EmotionalLink>
      </div>
      <Route exact path="/" component={WelcomePage} />
      <Route path="/characters" render={props => <CharacterList />} />
    </header>
  );
}
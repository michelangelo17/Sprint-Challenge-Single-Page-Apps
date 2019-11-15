import React from "react";
import CharactersAPI from "../apis/CharactersAPI";

export default function CharacterList() {
  const charArray = CharactersAPI()
  return (
    <section className="character-list">
      <h2>TODO: `array.map()` over your state here!</h2>
    </section>
  );
}

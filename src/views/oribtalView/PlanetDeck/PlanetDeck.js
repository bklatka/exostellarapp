import React from "react";
import AddPlanetBtn from "./AddPlanetBtn/AddPlanetBtn";
import PlanetInDeck from "./PlanetInDeck/PlanetInDeck";
import EmptyDockSpace from "./EmptyDockSpace/EmptyDockSpace";

const UNSELECTED_PLANETS = [
  {
    name: "Earth",
    mass: 123,
    icon: (
      <img
        src="https://media.npr.org/assets/img/2013/03/06/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb-s800-c85.jpg"
        alt=""
      />
    )
  },
  {
    name: "Mars",
    mass: 3423,
    icon: (
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg"
        alt=""
      />
    )
  },
  {
    name: "Venus",
    mass: 534,
    icon: (
      <img src="https://en.es-static.us/upl/2019/09/Venus-dayside.png" alt="" />
    )
  }
];

const DECK_SIZE = 10;

const PlanetDeck = () => {
  const planets = UNSELECTED_PLANETS;
  const numOfEmptySpaces = DECK_SIZE - planets.length;
  const emptySpaces = Array(numOfEmptySpaces).fill(1);
  return (
    <div className={"planet-deck"}>
      <ul>
        {planets.map(planet => (
          <PlanetInDeck key={planet.name} planet={planet} />
        ))}
        {emptySpaces.map((_, index) => (
          <EmptyDockSpace key={index} />
        ))}
      </ul>
      <AddPlanetBtn />
    </div>
  );
};

PlanetDeck.propTypes = {};

export default PlanetDeck;

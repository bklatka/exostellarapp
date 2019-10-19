import React from "react";
import AddPlanetBtn from "./AddPlanetBtn/AddPlanetBtn";
import PlanetInDeck from "./PlanetInDeck/PlanetInDeck";
import { SinglePlanetWrapper, StyledPlanetDeck } from "./PlanetDeck.styles";
import { useSelector } from "react-redux";
import { getMonitorState } from "../../../store/orbitalView/orbitalView.selectors";
import { MONITOR_STATE } from "../../../store/orbitalView/orbitalView.reducer";

const UNSELECTED_PLANETS = [
  {
    name: "Earth",
    mass: 123,
    imgUrl:
      "https://media.npr.org/assets/img/2013/03/06/bluemarble3k-smaller-nasa_custom-644f0b7082d6d0f6814a9e82908569c07ea55ccb-s800-c85.jpg"
  },
  {
    name: "Mars",
    mass: 3423,
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/1200px-OSIRIS_Mars_true_color.jpg"
  },
  {
    name: "Venus",
    mass: 534,
    imgUrl: "https://en.es-static.us/upl/2019/09/Venus-dayside.png"
  }
];

const DECK_SIZE = 10;

const PlanetDeck = () => {
  const planets = UNSELECTED_PLANETS;
  const monitorState = useSelector(getMonitorState);
  return (
    <StyledPlanetDeck showInfo={monitorState === MONITOR_STATE.SELECTING}>
      {planets.map(planet => (
        <SinglePlanetWrapper key={planet.name}>
          <PlanetInDeck planet={planet} />
        </SinglePlanetWrapper>
      ))}
      <SinglePlanetWrapper>
        <AddPlanetBtn />
      </SinglePlanetWrapper>
    </StyledPlanetDeck>
  );
};

PlanetDeck.propTypes = {};

export default PlanetDeck;

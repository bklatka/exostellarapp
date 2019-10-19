import React from "react";
import { Tabs } from "antd";
import PlanetsInOrbit from "./PlanetsInOrbit/PlanetsInOrbit";
import PlanetsInDeck from "./PlanetsInDeck/PlanetsInDeck";
import { StyledPlanetDeck } from "./PlanetsInDeck/PlanetDeck.styles";

const PlanetDeck = props => {
  const { TabPane } = Tabs;
  return (
    <StyledPlanetDeck style={{ padding: "0 2rem" }}>
      <Tabs defaultActiveKey="1">
        <TabPane tab="In deck" key="1">
          <PlanetsInDeck />
        </TabPane>
        <TabPane tab="In orbit" key="2">
          <PlanetsInOrbit />
        </TabPane>
      </Tabs>
    </StyledPlanetDeck>
  );
};

PlanetDeck.propTypes = {};

export default PlanetDeck;

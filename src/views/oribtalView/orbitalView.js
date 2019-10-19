import React from "react";
import AppLayout from "../../components/AppLayout/AppLayout";
import SystemMonitor from "./SystemMonitor/SystemMonitor";
import PlanetDeck from "./PlanetDeck/PlanetDeck";
import { isMissionFullfilled } from "../../utils/goals.service";
import { useSelector } from "react-redux";
import { getCurrentMissionGoals } from "../../store/currentMission/currentMission.selectors";
import { getCurrentSystem } from "../../store/currentSystem/currentSystem.selectors";
import { Redirect } from "react-router-dom";

const OrbitalView = props => {
  const missionGoals = useSelector(getCurrentMissionGoals);
  const system = useSelector(getCurrentSystem);
  const isFinished = isMissionFullfilled(missionGoals, system);

  if (isFinished) {
    return <Redirect to={"/congrats"} />;
  }
  return (
    <AppLayout style={{ flex: "1", display: "flex", flexDirection: "column" }}>
      <SystemMonitor />
      <PlanetDeck />
    </AppLayout>
  );
};

OrbitalView.propTypes = {};

export default OrbitalView;

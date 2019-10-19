import React from "react";
import { useSelector } from "react-redux";
import { getCurrentMissionGoals } from "../../../../../store/currentMission/currentMission.selectors";
import { Alert } from "antd";

const Missions = props => {
  const goals = useSelector(getCurrentMissionGoals);
  return (
    <div>
      {goals.map(goal => (
        <Alert
          message={goal.title}
          description={goal.description}
          type={goal.fulfilled ? "success" : "warning"}
          showIcon
        />
      ))}
    </div>
  );
};

Missions.propTypes = {};

export default Missions;

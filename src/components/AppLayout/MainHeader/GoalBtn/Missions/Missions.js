import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentMissionGoals } from "../../../../../store/currentMission/currentMission.selectors";
import { Alert } from "antd";
import {
  getCurrentSystem,
  getCurrentSystemPlanets
} from "../../../../../store/currentSystem/currentSystem.selectors";
import { isGoalFulfilled } from "../../../../../utils/goals.service";
import {
  GOAL_FULFILLED,
  GOAL_NOT_FULFILLED
} from "../../../../../store/currentMission/currentMission.actions";

const Missions = props => {
  const currentSystem = useSelector(getCurrentSystem);
  const planets = useSelector(getCurrentSystemPlanets);
  const goals = useSelector(getCurrentMissionGoals);

  const dispatch = useDispatch();

  useEffect(() => {
    goals
      .filter(goal => goal.fullfilled)
      .forEach(goal => {
        if (!isGoalFulfilled(goal, currentSystem)) {
          dispatch({ type: GOAL_NOT_FULFILLED, payload: goal });
        }
      });
    goals
      .filter(goal => !goal.fullfilled)
      .forEach(goal => {
        if (isGoalFulfilled(goal, currentSystem)) {
          dispatch({ type: GOAL_FULFILLED, payload: goal });
        }
      });
  }, [planets, goals, currentSystem, dispatch]);
  return (
    <div>
      {goals.map(goal => (
        <Alert
          message={goal.title}
          description={goal.description}
          type={goal.fullfilled ? "success" : "warning"}
          showIcon
        />
      ))}
    </div>
  );
};

Missions.propTypes = {};

export default Missions;

import React, { useState } from "react";
import { Badge, Drawer } from "antd";
import Missions from "./Missions/Missions";
import { useSelector } from "react-redux";
import { getUnfilledMissions } from "../../../../store/currentMission/currentMission.selectors";
import { BorderButton } from "../../../BorderedButton/BorderedButton";

const GoalBtn = props => {
  const missions = useSelector(getUnfilledMissions);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div>
      <Badge count={missions.length}>
        <BorderButton onClick={open}>Missions</BorderButton>
      </Badge>
      <Drawer
        width={"100%"}
        title="Goals"
        placement="right"
        onClose={close}
        visible={isOpen}
      >
        <Missions />
      </Drawer>
    </div>
  );
};

GoalBtn.propTypes = {};

export default GoalBtn;

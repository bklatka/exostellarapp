import React, { useState } from "react";
import { Badge, Button, Drawer } from "antd";
import Missions from "./Missions/Missions";
import { useSelector } from "react-redux";
import { getUnfilledMissions } from "../../../../store/currentMission/currentMission.selectors";

const GoalBtn = props => {
  const missions = useSelector(getUnfilledMissions);
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div>
      <Badge count={missions.length}>
        <Button type="primary" onClick={open}>
          Goals
        </Button>
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

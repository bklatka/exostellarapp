import React, { useState } from "react";
import { Button, Drawer } from "antd";
import Missions from "./Missions/Missions";

const GoalBtn = props => {
  const [isOpen, setIsOpen] = useState(false);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  return (
    <div>
      <Button type="primary" onClick={open}>
        Goals
      </Button>
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

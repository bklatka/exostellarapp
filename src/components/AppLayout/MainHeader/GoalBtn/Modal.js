import React, { useState } from "react";
import { Badge, Drawer } from "antd";
import Missions from "./Missions/Missions";
import { useDispatch, useSelector } from "react-redux";
import { getUnfilledMissions } from "../../../../store/currentMission/currentMission.selectors";
import { BorderButton } from "../../../BorderedButton/BorderedButton";
import {
  getTypeOfViewModal,
  isModelOpen as isModelOpenSelector
} from "../../../../store/modal/modal.selectors";
import StarView from "../../../../views/starView";
import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_TYPE_OF_VIEW_MODAL
} from "../../../../store/modal/modal.actions";
import { EditPlanetView, NewPlanetView } from "../../../../views/planetView";
import { CLEAR_PLANET_FORM } from "../../../../store/planet/planet.actions";

export const TYPES_OF_VIEW = {
  STAR_VIEW: "STAR_VIEW",
  PLANET_VIEW: "PLANET_VIEW",
  GOALS_VIEW: "GOALS_VIEW"
};

const TYPES_OF_VIEW_MODAL_TITLE = {
  [TYPES_OF_VIEW.STAR_VIEW]: "Star creator",
  [TYPES_OF_VIEW.PLANET_VIEW]: "planet creator",
  [TYPES_OF_VIEW.GOALS_VIEW]: "Goals"
};

const Modal = props => {
  const dispatch = useDispatch();
  const missions = useSelector(getUnfilledMissions);
  const typeOfViewModal = useSelector(getTypeOfViewModal);
  const isModelOpen = useSelector(isModelOpenSelector);

  const open = () => {
    dispatch({ type: OPEN_MODAL });
    dispatch({
      type: SET_TYPE_OF_VIEW_MODAL,
      payload: TYPES_OF_VIEW.GOALS_VIEW
    });
  };
  const close = () => {
    dispatch({ type: CLOSE_MODAL });
    dispatch({ type: CLEAR_PLANET_FORM });
  };

  return (
    <div>
      <Badge count={missions.length}>
        <BorderButton onClick={open}>Missions</BorderButton>
      </Badge>
      <Drawer
        width={"100%"}
        title={TYPES_OF_VIEW_MODAL_TITLE[typeOfViewModal]}
        placement="right"
        onClose={close}
        visible={isModelOpen}
      >
        {(() => {
          switch (typeOfViewModal) {
            case TYPES_OF_VIEW.GOALS_VIEW:
              return <Missions />;
            case TYPES_OF_VIEW.STAR_VIEW:
              return <StarView />;
            case TYPES_OF_VIEW.PLANET_VIEW:
              return <NewPlanetView />;
            default:
              return null;
          }
        })()}
      </Drawer>
    </div>
  );
};

Modal.propTypes = {};

export default Modal;

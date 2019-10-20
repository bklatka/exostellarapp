import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SET_TYPE_OF_VIEW_MODAL
} from "./modal.actions";

export const initialState = {
  typeOfViewModal: null,
  isModalOpen: false
};

export const modalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_TYPE_OF_VIEW_MODAL: {
      return { ...state, typeOfViewModal: action.payload };
    }
    case OPEN_MODAL: {
      return { ...state, isModalOpen: true };
    }
    case CLOSE_MODAL: {
      return { ...state, isModalOpen: false };
    }
    default:
      return state;
  }
};

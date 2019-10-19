import { ADD_ELEMENT } from '../actions/test.actions';


export const testReducer = (state = [], action) => {
  switch (action.type) {
      case ADD_ELEMENT: {
          return [...state, action.payload];
      }
      default:{
          return state;
      }
  }
};

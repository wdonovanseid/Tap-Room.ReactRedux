import * as c from './../actions/ActionTypes';

export default (state = 0.00, action) => {
  const { pintCost } = action;
  switch (action.type) {
    case c.ADD_COST_TO_TAB:
      const newState = state + pintCost;
      return newState;
    case c.REMOVE_COST_FROM_TAB:
      const newState2 = state - pintCost;
      return newState2;
    default:
      return state;
    }
};
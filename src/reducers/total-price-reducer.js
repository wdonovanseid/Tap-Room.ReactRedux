import * as c from './../actions/ActionTypes';

export default (state = 0.00, action) => {
  const { pintCost } = action;
  switch (action.type) {
    case c.ADD_COST_TO_TAB:
      return state + pintCost;
    case c.REMOVE_COST_FROM_TAB:
      return state - pintCost;
    default:
      return state;
    }
};
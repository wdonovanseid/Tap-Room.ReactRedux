import * as c from './../actions/ActionTypes';

export default (state = "kegList", action) => {
  switch (action.type) {
    case c.SHOW_NEW_KEG_FORM:
      const newState = "newKeg";
      return newState;
    case c.SHOW_KEG_DETAILS:
      const newState2 = "kegDetail";
      return newState2;
    case c.SHOW_EDIT_KEG_FORM:
      const newState3 = "editKeg";
      return newState3;
    case c.SHOW_KEG_LIST:
      const newState4 = "kegList";
      return newState4;
    default:
      return state;
    }
};
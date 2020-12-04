import * as c from '../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, quantity, id } = action;
  switch (action.type) {
  case c.ADD_PINT_TO_TAB:
    return Object.assign({}, state, {
      [id]: {
        name: name,
        brand: brand,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  case c.DELETE_PINT_FROM_TAB:
    const newState = { ...state };
    delete newState[id];
    return newState;
  default:
    return state;
  }  
};
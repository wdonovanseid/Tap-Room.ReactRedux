import totalPriceReducer from '../../reducers/total-price-reducer';
import * as c from './../../actions/ActionTypes';

describe('totalPriceReducer', () => {

  const currentState = 37.99;
  let action;

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(totalPriceReducer(0.00, { type: null })).toEqual(0.00);
  });

  test('Should add cost to tabs total', () => {
    action = {
      type: c.ADD_COST_TO_TAB,
      pintCost: 4.32
    }
    expect(totalPriceReducer(currentState, action)).toEqual(42.31);
  });

  test('Should subtract cost to tabs total', () => {
    action = {
      type: c.REMOVE_COST_FROM_TAB,
      pintCost: 4.31
    }
    expect(totalPriceReducer(currentState, action)).toEqual(33.68);
  });

});
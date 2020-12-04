import tabPintListReducer from '../../reducers/tab-pint-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('tabPintListReducer', () => {

  const currentState = {
    1: {name: 'beer',
        brand: 'BIG BRAND',
        price: '4.99',
        quantity: 3,
        id: 1},
    2: {name: 'ethanol',
        brand: 'small BRAND',
        price: '99.99',
        quantity: 99,
        id: 2}
  }

  let action;
  const pintData = {
    name: 'beer',
    brand: 'BIG BRAND',
    price: '4.99',
    quantity: 11,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tabPintListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new pint data to tabPintList', () => {
    const { name, brand, price, quantity, id } = pintData;
    action = {
      type: c.ADD_PINT_TO_TAB,
      name: name,
      brand: brand,
      price: price,
      quantity: quantity,
      id: id
    };

    expect(tabPintListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a pint', () => {
    action = {
      type: c.DELETE_PINT_FROM_TAB,
      id: 1
    };
    expect(tabPintListReducer(currentState, action)).toEqual({
      2: {name: 'ethanol',
          brand: 'small BRAND',
          price: '99.99',
          quantity: 99,
          id: 2}
    });
  });

});
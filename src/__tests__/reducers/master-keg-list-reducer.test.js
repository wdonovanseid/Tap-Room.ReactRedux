import masterKegListReducer from '../../reducers/master-keg-list-reducer';
import * as c from './../../actions/ActionTypes';

describe('masterKegListReducer', () => {

  const currentState = {
    1: {name: 'beer',
        brand: 'BIG BRAND',
        price: '4.99',
        alcoholContent: '12',
        pints: 124,
        id: 1},
    2: {name: 'ethanol',
        brand: 'small BRAND',
        price: '99.99',
        alcoholContent: '99',
        pints: 124,
        id: 2}
  }

  let action;
  const kegData = {
    name: 'beer',
    brand: 'BIG BRAND',
    price: '4.99',
    alcoholContent: '12',
    pints: 124,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(masterKegListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully add new keg data to masterKegList', () => {
    const { name, brand, price, alcoholContent, pints, id } = kegData;
    action = {
      type: c.ADD_KEG,
      name: name,
      brand: brand,
      price: price,
      alcoholContent: alcoholContent,
      pints: pints,
      id: id
    };

    expect(masterKegListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        alcoholContent: alcoholContent,
        pints: pints,
        id: id
      }
    });
  });

  test('Should successfully delete a keg', () => {
    action = {
      type: c.DELETE_KEG,
      id: 1
    };
    expect(masterKegListReducer(currentState, action)).toEqual({
      2: {name: 'ethanol',
          brand: 'small BRAND',
          price: '99.99',
          alcoholContent: '99',
          pints: 124,
          id: 2}
    });
  });

});
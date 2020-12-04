import selectedKegReducer from '../../reducers/selected-keg-reducer';
import * as c from './../../actions/ActionTypes';

describe('selectedKegReducer', () => {

  const kegData = {
    name: 'beer',
    brand: 'BIG BRAND',
    price: '4.99',
    alcoholContent: '12',
    pints: 124,
    id: 1
  };

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(selectedKegReducer(null, { type: null })).toEqual(null);
  });

  test('Should return selected keg state', () => {
    const action = {
      type: c.SELECTED_KEG,
      selectedKeg: kegData
    }
    expect(selectedKegReducer(null, action)).toEqual(kegData);
  });

  test('Should return null keg state', () => {
    const action = {
      type: c.NO_KEG_SELECTED,
    }
    expect(selectedKegReducer(null, action)).toEqual(null);
  });

});
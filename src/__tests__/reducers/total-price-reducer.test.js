import totalPriceReducer from '../../reducers/total-price-reducer';
import * as c from './../../actions/ActionTypes';

describe('totalPriceReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(totalPriceReducer(0.00, { type: null })).toEqual(0.00);
  });

});
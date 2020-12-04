import totalPriceReducer from '../../reducers/total-price-reducer';

describe('totalPriceReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(totalPriceReducer({}, { type: null })).toEqual({});
  });

});
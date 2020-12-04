import tabPintListReducer from '../../reducers/tab-pint-list-reducer';

describe('tabPintListReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(tabPintListReducer({}, { type: null })).toEqual({});
  });

});
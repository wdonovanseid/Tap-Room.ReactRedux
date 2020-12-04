import currentPageReducer from '../../reducers/current-page-reducer';
import * as c from './../../actions/ActionTypes'

describe('currentPageReducer', () => {

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(currentPageReducer("kegList", { type: null })).toEqual("kegList");
  });

  test('Should return newKeg string', () => {
    expect(currentPageReducer({}, { type: c.SHOW_NEW_KEG_FORM })).toEqual("newKeg");
  });

  test('Should return kegDetail string', () => {
    expect(currentPageReducer({}, { type: c.SHOW_KEG_DETAILS })).toEqual("kegDetail");
  });

  test('Should return editKeg string', () => {
    expect(currentPageReducer({}, { type: c.SHOW_EDIT_KEG_FORM })).toEqual("editKeg");
  });

  test('Should return kegDetail string', () => {
    expect(currentPageReducer({}, { type: c.SHOW_KEG_LIST })).toEqual("kegList");
  });

  test('Should return checkTab string', () => {
    expect(currentPageReducer({}, { type: c.SHOW_CURRENT_TAB })).toEqual("checkTab");
  });

});
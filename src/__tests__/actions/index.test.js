import * as actions from './../../actions/index';
import * as c from './../../actions/ActionTypes';

describe('actions', () => {

  const kegData = {
    name: 'beer',
    brand: 'BIG BRAND',
    price: '4.99',
    alcoholContent: '12',
    pints: 124,
    id: 1
  };

  it('addKeg should create ADD_KEG action', () => {
    expect(actions.addKeg(kegData)).toEqual({
      type: c.ADD_KEG,
      name: kegData.name,
      brand: kegData.brand,
      price: kegData.price,
      alcoholContent: kegData.alcoholContent,
      pints: kegData.pints,
      id: kegData.id
    });
  });

  it('deleteKeg should create DELETE_KEG action', () => {
    expect(actions.deleteKeg(1)).toEqual({
      type: c.DELETE_KEG,
      id: 1
    });
  });

  it('showKegList should create SHOW_KEG_LIST action', () => {
    expect(actions.showKegList).toEqual({
      type: c.SHOW_KEG_LIST
    });
  });

  it('showNewKegForm should create SHOW_NEW_KEG_FORM action', () => {
    expect(actions.showNewKegForm).toEqual({
      type: c.SHOW_NEW_KEG_FORM
    });
  });

  it('showKegDetails should create SHOW_KEG_DETAILS action', () => {
    expect(actions.showKegDetails).toEqual({
      type: c.SHOW_KEG_DETAILS
    });
  });

  it('showEditKegForm should create SHOW_EDIT_KEG_FORM action', () => {
    expect(actions.showEditKegForm).toEqual({
      type: c.SHOW_EDIT_KEG_FORM
    });
  });

  it('showCurrentTab should create SHOW_CURRENT_TAB action', () => {
    expect(actions.showCurrentTab).toEqual({
      type: c.SHOW_CURRENT_TAB
    });
  });

  it('selectedKeg should create SELECTED_KEG action', () => {
    expect(actions.selectedKeg(kegData)).toEqual({
      type: c.SELECTED_KEG,
      selectedKeg: kegData
    });
  });

  it('noKegSelected should create NO_KEG_SELECTED action', () => {
    expect(actions.noKegSelected).toEqual({
      type: c.NO_KEG_SELECTED
    });
  });

})
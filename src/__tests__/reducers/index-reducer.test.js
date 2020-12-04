import rootReducer from '../../reducers/index-reducer';
import { createStore } from 'redux';
import currentPageReducer from '../../reducers/current-page-reducer';
import masterKegListReducer from '../../reducers/master-keg-list-reducer';
import selectedKegReducer from '../../reducers/selected-keg-reducer';
import tabPintListReducer from '../../reducers/tab-pint-list-reducer';
import totalPriceReducer from '../../reducers/total-price-reducer';
import * as c from './../../actions/ActionTypes'

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      currentPage: "kegList",
      masterKegList: {},
      selectedKeg: null,
      tabPintList: {},
      totalPrice: 0.00
    });
  });

  test('Check that initial state of currentPageReducer matches root reducer', () => {
    expect(store.getState().currentPage).toEqual(currentPageReducer(undefined, { type: null }));
  });

  test('Check that initial state of masterKegListReducer matches root reducer', () => {
    expect(store.getState().masterKegList).toEqual(masterKegListReducer(undefined, { type: null }));
  });

  test('Check that initial state of selectedKegReducer matches root reducer', () => {
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, { type: null }));
  });

  test('Check that initial state of tabPintListReducer matches root reducer', () => {
    expect(store.getState().tabPintList).toEqual(tabPintListReducer(undefined, { type: null }));
  });

  test('Check that initial state of totalPriceReducer matches root reducer', () => {
    expect(store.getState().totalPrice).toEqual(totalPriceReducer(undefined, { type: null }));
  });

  test('Check that ADD_KEG action works for masterKegListReducer and root reducer', () => {
    const action = {
      type: c.ADD_KEG,
      name: 'beer',
      brand: 'BIG BRAND',
      price: '4.99',
      alcoholContent: '12',
      pints: 124,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterKegList).toEqual(masterKegListReducer(undefined, action));
  });
  
  test('Check that SHOW_KEG_DETAILS action works for currentPageReducer and root reducer', () => {
    const action = {
      type: c.SHOW_KEG_DETAILS
    }
    store.dispatch(action);
    expect(store.getState().currentPage).toEqual(currentPageReducer(undefined, action));
  });

  test('Check that SELECTED_KEG action works for selectedKegReducer and root reducer', () => {
    const action = {
      type: c.SELECTED_KEG,
      selectedKeg: {name: 'beer',
      brand: 'BIG BRAND',
      price: '4.99',
      alcoholContent: '12',
      pints: 124,
      id: 1}
    }
    store.dispatch(action);
    expect(store.getState().selectedKeg).toEqual(selectedKegReducer(undefined, action));
  });

});
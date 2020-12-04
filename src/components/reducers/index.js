import { Toast } from 'bootstrap';
import { combineReducers } from 'redux';
import currentPageReducer from './current-page-reducer';
import masterKegListReducer from './master-keg-list-reducer';
import selectedKegReducer from './selected-keg-reducer';
import tabPintListReducer from './tab-pint-list-reducer';
import totalPriceReducer from './total-price-reducer';

const rootReducer = combineReducers({
  currentPage: currentPageReducer,
  masterKegList: masterKegListReducer,
  selectedKeg: selectedKegReducer,
  tabPintList: tabPintListReducer,
  totalPrice: totalPriceReducer
});

export default rootReducer;
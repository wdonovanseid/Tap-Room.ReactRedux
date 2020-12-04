import * as c from './ActionTypes';

export const addKeg = keg => {
  const { name, brand, price, alcoholContent, pints, id } = keg;
  return {
    type: c.ADD_KEG,
    name: name,
    brand: brand,
    price: price,
    alcoholContent: alcoholContent,
    pints: pints,
    id: id
  }
}

export const deleteKeg = id => ({
  type: c.DELETE_KEG,
  id
});

export const showKegList = ({
  type: c.SHOW_KEG_LIST
});

export const showNewKegForm = ({
  type: c.SHOW_NEW_KEG_FORM
});

export const showKegDetails = ({
  type: c.SHOW_KEG_DETAILS
});

export const showEditKegForm = ({
  type: c.SHOW_EDIT_KEG_FORM
});

export const showCurrentTab = ({
  type: c.SHOW_CURRENT_TAB
});

export const selectedKeg = keg => ({
  type: c.SELECTED_KEG,
  selectedKeg: keg
});

export const noKegSelected = ({
  type: c.NO_KEG_SELECTED
});

export const addPintToTab = pint => {
  const { name, brand, price, id } = pint;
  return {
    type: c.ADD_PINT_TO_TAB,
    name: name,
    brand: brand,
    price: price,
    quantity: 1,
    id: id
  }
}

export const deletePintFromTab = id => ({
  type: c.DELETE_PINT_FROM_TAB,
  id: id
});

export const addCostToTab = cost => ({
  type: c.ADD_COST_TO_TAB,
  pintCost: cost
});

export const removeCostFromTab = cost => ({
  type: c.REMOVE_COST_FROM_TAB,
  pintCost: cost
});
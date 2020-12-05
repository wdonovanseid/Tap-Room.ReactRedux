import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import './css/TapRoomControl.css';
import Tab from './Tab';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import * as a from './../actions/index.js';
import { v4 } from 'uuid';

class TapRoomControl extends React.Component {

  handleClick = () => {
    if (this.props.currentPage !== 'kegList') {
      this.props.dispatch(a.showKegList);
      this.props.dispatch(a.noKegSelected);
    } else {
      this.props.dispatch(a.showNewKegForm);
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    this.props.dispatch(a.addKeg(newKeg));
    this.props.dispatch(a.showKegList);
  }

  handleChangingSelectedKeg = (id) => {
    const keg = this.props.masterKegList[id];
    this.props.dispatch(a.selectedKeg(keg));
    this.props.dispatch(a.showKegDetails);
  }

  handleEditClick = () => {
    this.props.dispatch(a.showEditKegForm);
  }

  handleEditingKegInList = (KegToEdit) => {
    this.props.dispatch(a.addKeg(KegToEdit));
    this.props.dispatch(a.showKegList);
    this.props.dispatch(a.noKegSelected);
  }

  handleDeletingKeg = (id) => {
    this.props.dispatch(a.deleteKeg(id));
    this.props.dispatch(a.showKegList);
    this.props.dispatch(a.noKegSelected);
  }

  handleRestockClick = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    selectedKeg.pints = 124;
    this.setState({});
  }

  handleCheckTab = () => {
    this.props.dispatch(a.showCurrentTab);
  }

  handleBuyClick = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    selectedKeg.pints -= 1;
    const newPint = {...selectedKeg};
    const pintList = Object.values(this.props.tabPintList);
    if (pintList.some(x => x.name === newPint.name && x.brand === newPint.brand && x.price === newPint.price)){
      const samePintDifferentID = pintList.find(x => x.name === newPint.name && x.brand === newPint.brand && x.price === newPint.price);
      newPint.id = samePintDifferentID.id;
      pintList.forEach(pint => {
        if (pint.id === newPint.id && pint.name === newPint.name && pint.brand === newPint.brand) {
          pint.quantity+=1;
        }
      });
    } else {
      if (pintList.some(x => x.id === newPint.id)) {
        newPint.id = v4();
      }
      this.props.dispatch(a.addPintToTab(newPint));
    }
    this.props.dispatch(a.addCostToTab(newPint.price));
  }

  handleCancelOrderClick = (id) => {
    const cancelPint = this.props.tabPintList[id];
    if (cancelPint.quantity > 1) {
      cancelPint.quantity -= 1;
    } else {
      this.props.dispatch(a.deletePintFromTab(id));
    }
    this.props.dispatch(a.removeCostFromTab(cancelPint.price));
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.currentPage === 'checkTab') {
      currentlyVisibleState =
        <Tab
          pintList={this.props.tabPintList}
          onClickingCancelOrder={this.handleCancelOrderClick}
          totalTab={this.props.totalPrice} />
      buttonText = "Return to Keg List";
    } else if (this.props.currentPage === 'editKeg') {
      currentlyVisibleState =
        <EditKegForm
          keg={this.props.selectedKeg}
          onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.props.selectedKeg != null) {
      currentlyVisibleState =
        <KegDetail
          keg={this.props.selectedKeg}
          onClickingBuy={this.handleBuyClick}
          onClickingEdit={this.handleEditClick}
          onClickingDelete={this.handleDeletingKeg}
          onClickingRestock={this.handleRestockClick} />
      buttonText = "Return to Keg List";
    } else if (this.props.currentPage === 'newKeg') {
      currentlyVisibleState =
        <NewKegForm
          onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState =
        <KegList
          kegList={this.props.masterKegList}
          onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add Keg";
    }
    return (
      <React.Fragment>
        <button type="button" className="btn btn-outline-success" onClick={this.handleCheckTab}>Check Tab</button>
        <div className="super">
          {currentlyVisibleState}
        </div>
        <button type="button" className="btn btn-outline-success" onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

TapRoomControl.propTypes = {
  currentPage: PropTypes.string,
  masterKegList: PropTypes.object,
  selectedKeg: PropTypes.object,
  tabPintList: PropTypes.object,
  totalPrice: PropTypes.number
};

const mapStateToProps = state => {
  return {
    currentPage: state.currentPage,
    masterKegList: state.masterKegList,
    selectedKeg: state.selectedKeg,
    tabPintList: state.tabPintList,
    totalPrice: state.totalPrice
  }
}

TapRoomControl = connect(mapStateToProps)(TapRoomControl);

export default TapRoomControl;

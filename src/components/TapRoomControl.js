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

class TapRoomControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      tabPintList: [],
      totalPrice: 0.00
    }
    this.handleClick = this.handleClick.bind(this);
  }

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
    const selectedKeg = this.state.masterKegList.filter(x => x.id === id)[0];
    selectedKeg.pints -= 1;
    const pint = {...selectedKeg};
    pint.quantity = 1;
    const newPintList = this.state.tabPintList.concat(pint);
    const temp = [];
    newPintList.forEach((item) => {
      if (temp.some(x => x.id === item.id)) {
        const sameItem = temp.find(x => x.id === item.id)
        sameItem.quantity += 1;
      } else {
        temp.push(item);
      }
    })
    this.setState({
      tabPintList: temp,
      totalPrice: this.state.totalPrice + pint.price
    });
  }

  handleCancelOrderClick = (id) => {
    const pint = this.state.tabPintList.filter(x => x.id === id)[0];
    let newPintList = this.state.tabPintList;
    if (pint.quantity > 1) {
      pint.quantity -= 1;
    } else {
      if (this.state.tabPintList.length > 1) {
        const index = this.state.tabPintList.findIndex(x => x.id === id);
        const copyPint = [...this.state.tabPintList];
        copyPint.splice(index, 1);
        newPintList = copyPint;
      } else {
        newPintList = [];
      }
    }
    this.setState({
      tabPintList: newPintList,
      totalPrice: this.state.totalPrice - pint.price
    });
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.props.currentPage === 'checkTab') {
      currentlyVisibleState =
        <Tab
          pintList={this.state.tabPintList}
          onClickingCancelOrder={this.handleCancelOrderClick}
          totalTab={this.state.totalPrice} />
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

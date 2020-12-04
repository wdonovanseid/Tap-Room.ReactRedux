import React from 'react';
import KegList from './KegList';
import NewKegForm from './NewKegForm';
import KegDetail from './KegDetail';
import EditKegForm from './EditKegForm';
import './css/TapRoomControl.css';
import Tab from './Tab';

class TapRoomControl extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentPage: "kegList",
      masterKegList: [],
      selectedKeg: null,
      tabPintList: [],
      totalPrice: 0.00
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    if (this.state.currentPage !== 'kegList') {
      this.setState({
        currentPage: 'kegList',
        selectedKeg: null
      });
    } else {
      this.setState({
        currentPage: 'newKeg',
      });
    }
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({
      masterKegList: newMasterKegList,
      currentPage: 'kegList'
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(x => x.id === id)[0];
    this.setState({
      selectedKeg: selectedKeg,
      currentPage: 'kegDetail'
    });
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

  handleEditClick = () => {
    this.setState({ currentPage: 'editKeg' });
  }

  handleEditingKegInList = (KegToEdit) => {
    const editedMasterKegList = this.state.masterKegList
      .filter(x => x.id !== this.state.selectedKeg.id)
      .concat(KegToEdit);
    this.setState({
      masterKegList: editedMasterKegList,
      currentPage: 'kegList',
      selectedKeg: null
    });
  }

  handleDeletingKeg = (id) => {
    const newMasterKegList = this.state.masterKegList.filter(x => x.id !== id);
    this.setState({
      masterKegList: newMasterKegList,
      selectedKeg: null,
      currentPage: 'kegList'
    });
  }

  handleRestockClick = (id) => {
    const selectedKeg = this.state.masterKegList.filter(x => x.id === id)[0];
    selectedKeg.pints = 124;
    this.setState({});
  }

  handleCheckTab = () => {
    this.setState({ currentPage: 'checkTab' });
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
    if (this.state.currentPage === 'checkTab') {
      currentlyVisibleState =
        <Tab
          pintList={this.state.tabPintList}
          onClickingCancelOrder={this.handleCancelOrderClick}
          totalTab={this.state.totalPrice} />
      buttonText = "Return to Keg List";
    } else if (this.state.currentPage === 'editKeg') {
      currentlyVisibleState =
        <EditKegForm
          keg={this.state.selectedKeg}
          onEditKeg={this.handleEditingKegInList} />
      buttonText = "Return to Keg List";
    } else if (this.state.selectedKeg != null) {
      currentlyVisibleState =
        <KegDetail
          keg={this.state.selectedKeg}
          onClickingBuy={this.handleBuyClick}
          onClickingEdit={this.handleEditClick}
          onClickingDelete={this.handleDeletingKeg}
          onClickingRestock={this.handleRestockClick} />
      buttonText = "Return to Keg List";
    } else if (this.state.currentPage === 'newKeg') {
      currentlyVisibleState =
        <NewKegForm
          onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState =
        <KegList
          kegList={this.state.masterKegList}
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

export default TapRoomControl;

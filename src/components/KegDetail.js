import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingBuy, onClickingDelete, onClickingRestock } = props;
  return (
    <React.Fragment>
      <h2>{keg.name} Details</h2>
      <hr />
      <h3>Brand: {keg.brand}</h3>
      <p>Price: <span style={{color: "green"}}>${keg.price.toFixed(2)}</span></p>
      <p>Alcohol Content: {keg.alcoholContent}%</p>
      <p>Pints: {keg.pints > 9 ? keg.pints : keg.pints > 0 ? 'Almost Empty! '+keg.pints+' left!' : 'Out of Stock'}</p>
      {keg.pints > 0 &&
        <button type="button" className="btn btn-danger" onClick={() => onClickingBuy(keg.id)}>Buy a Pint</button>
      }
      <button type="button" className="btn btn-info" onClick={props.onClickingEdit}>Update Keg</button>
      <button type="button" className="btn btn-primary" onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
      <button type="button" className="btn btn-info" onClick={() => onClickingRestock(keg.id)}>Restock Keg</button>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func
};

export default KegDetail;
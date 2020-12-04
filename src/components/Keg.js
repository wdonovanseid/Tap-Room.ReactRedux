import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <React.Fragment>
        {props.pints < 10 && props.pints > 0 && <h3 style={{color: 'red'}}>Almost Empty!</h3>}
        <h4>{props.brand}: {props.name} - <span style={{color:"green"}}>${props.price.toFixed(2)}</span>
          <button className="btn btn-info" onClick={() => props.whenKegClicked(props.id)}>Details</button>
        </h4>
        <p>{props.pints > 0 ? 'Pints Left: '+props.pints : 'Out of Stock'}</p>
        <hr />
    </React.Fragment >
  );
}

Keg.propTypes = {
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcholContent: PropTypes.number,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;
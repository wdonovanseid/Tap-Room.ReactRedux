import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
            <p>Name: <input
              type='text'
              name='name'
              placeholder='Name'
              defaultValue={props.name ? props.name : ''}
              required /></p>
            <p>Brand: <input
              name='brand'
              placeholder='Brand'
              defaultValue={props.brand ? props.brand : ''}
              required /></p>
            <p>Price: <input
              type='number'
              name='price'
              placeholder='0.00'
              defaultValue={props.price ? props.price : ''}
              min="0"
              step="0.01"
              required /></p>
            <p>Alcohol Content%: <input
              type='number'
              name='alcoholContent'
              placeholder='0'
              defaultValue={props.alcoholContent ? props.alcoholContent : ''}
              min="0"
              required /></p>
            {props.formButtonText === 'Edit Keg' &&
            <p>Pints: <input
              type='number'
              name='pints'
              defaultValue={props.pints ? props.pints : ''}
              min="0"
              required /></p>}
          <button type="submit" className="btn btn-primary">{props.formButtonText}</button>
        </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  formButtonText: PropTypes.string,
  name: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  alcoholContent: PropTypes.string,
  pints: PropTypes.number
};

export default ReusableForm;
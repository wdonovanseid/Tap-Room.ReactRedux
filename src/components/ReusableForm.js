import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  let keg = [];
  if (props.keg != null){
    keg.push(props.keg.name);
    keg.push(props.keg.brand);
    keg.push(props.keg.price);
    keg.push(props.keg.alcoholContent);
    keg.push(props.keg.pints);
  };
  return (
    <React.Fragment>
        <form onSubmit={props.formSubmissionHandler}>
            <p>Name: <input
              type='text'
              name='name'
              placeholder='Name'
              defaultValue={props.keg.name ? props.keg.name : ''}
              required /></p>
            <p>Brand: <input
              name='brand'
              placeholder='Brand'
              defaultValue={keg[1]}
              required /></p>
            <p>Price: <input
              type='number'
              name='price'
              placeholder='0.00'
              defaultValue={keg[2]}
              min="0"
              step="0.01"
              required /></p>
            <p>Alcohol Content%: <input
              type='number'
              name='alcoholContent'
              placeholder='0'
              defaultValue={keg[3]}
              min="0"
              required /></p>
            {props.formButtonText === 'Edit Keg' &&
            <p>Pints: <input
              type='number'
              name='pints'
              defaultValue={keg[4]}
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
  keg: PropTypes.object
};

export default ReusableForm;
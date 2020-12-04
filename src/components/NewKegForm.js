import React from "react";
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from './ReusableForm';

function NewKegForm(props) {
  return (
    <React.Fragment>
      <h2>Add a new Keg</h2>
      <hr />
      <ReusableForm
        formSubmissionHandler={handleNewKegFormSubmission}
        formButtonText="Add Keg" />
    </React.Fragment>
  );
  function handleNewKegFormSubmission(event) {
    event.preventDefault();
    props.onNewKegCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseFloat(event.target.price.value),
      alcoholContent: event.target.alcoholContent.value,
      pints: 124,
      id: v4()
    });
  }
}

NewKegForm.propTypes = {
  onNewKegCreation: PropTypes.func
};

export default NewKegForm;
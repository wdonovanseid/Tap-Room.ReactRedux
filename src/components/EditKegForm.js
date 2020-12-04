import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditKegForm(props) {
  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: parseFloat(event.target.price.value),
      alcoholContent: event.target.alcoholContent.value,
      pints: parseInt(event.target.pints.value),
      id: props.keg.id
    })
  }
  return (
    <React.Fragment>
      <h2>Edit Keg</h2>
      <hr />
      <ReusableForm
        formSubmissionHandler={handleEditKegFormSubmission}
        formButtonText="Edit Keg"
        keg={props.keg} />
    </React.Fragment >
  );
}

EditKegForm.propTypes = {
  onEditCreation: PropTypes.func
};

export default EditKegForm;
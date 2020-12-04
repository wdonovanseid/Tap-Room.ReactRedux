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
        name={props.keg.name}
        brand={props.keg.brand}
        price={props.keg.price}
        alcoholContent={props.keg.alcoholContent}
        pints={props.keg.pints} />
    </React.Fragment >
  );
}

EditKegForm.propTypes = {
  onEditCreation: PropTypes.func,
  keg: PropTypes.object
};

export default EditKegForm;
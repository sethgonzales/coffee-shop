import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";


function EditBeanForm(props) {
  const { bean } = props;

  function handleEditBeanFormSubmission(event) {
    event.preventDefault(); 
    props.onEditBean({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      weight: event.target.weight.value,
      price: event.target.price.value,
      id: bean.id
    });
  }

  return (
    <React.Fragment>
      <h1>Edit {bean.name} Inventory</h1>
      <ReusableForm
        formSubmissionHandler={handleEditBeanFormSubmission}
        buttonText="Update" />
    </React.Fragment>
  );
}


EditBeanForm.propTypes = {
  bean: PropTypes.object,
  onEditBean: PropTypes.func
};


export default EditBeanForm;

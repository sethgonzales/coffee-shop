import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
import { v4 } from 'uuid'; 

function NewBeanForm(props) {
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleNewBeanSubmission}
      buttonText="Create" />
    </React.Fragment>
  )

  function handleNewBeanSubmission(event) {
    event.preventDefault();
    props.onNewBeanCreation({
      name: event.target.name.value,
      origin: event.target.origin.value,
      roast: event.target.roast.value,
      weight: event.target.weight.value,
      price: event.target.price.value,
      id: v4()
    });
  }  
}

NewBeanForm.PropTypes = {
  onNewBeanCreation: PropTypes.func
};

export default NewBeanForm;
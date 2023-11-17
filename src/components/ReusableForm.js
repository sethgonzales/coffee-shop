import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div class="form">
        <form onSubmit={props.formSubmissionHandler}>
          <input
            type='text'
            name='names'
            placeholder='Name of Beans' /><br />
          <input
            type='text'
            name='origin'
            placeholder='Origin' /><br />
          <input
            type='text'
            name='roast'
            placeholder='Roast' /><br />
          <input
            name='weight'
            placeholder='Inventory Weight.' /><br />{/*make this set to 130 pounds */}
          <input
            name='price'
            placeholder='Price.' /><br />
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;

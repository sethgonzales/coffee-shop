import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) { 
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}> 
        <input
          type='text'
          name='names'
          placeholder='Name of Beans' />
        <input
          type='text'
          name='origin'
          placeholder='Origin' />
        <input
          type='text'
          name='roast'
          placeholder='Roast' />
        <input
          name='weight'
          placeholder='Inventory Weight.' /> {/*make this set to 130 pounds */}
        <input
          name='price'
          placeholder='Price.' />
        <button type='submit'>{props.buttonText}</button> 
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;

import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <div class="form">
        <form onSubmit={props.formSubmissionHandler}>
          <input
            type='text'
            name='name'
            placeholder='Name of Beans'
            required /><br />
          <input
            type='text'
            name='origin'
            placeholder='Origin'
            required /><br />
          <select name='roast' defaultValue='Light' required>
            <option value='Light'>Light</option>
            <option value='Medium'>Medium</option>
            <option value='Dark'>Dark</option>
          </select><br />
          <input
            type='number'
            name='weight'
            placeholder='Inventory Weight'
            defaultValue='130'
            min='0'
            max='200'
            required /><br />
          <input
            type='number'
            name='price'
            placeholder='Price'
            min='0'
            required /><br />
          <button class="update" type='submit'>{props.buttonText}</button>
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

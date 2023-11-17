import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props) {

  const { bean, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{bean.name} Inventory Details</h1>
      <p><b>Origin: </b> {bean.origin}</p>
      <p><b>Roast: </b> {bean.roast}</p>
      <p><b>Inventory Weight (lbs): </b> {bean.weight}</p>
      <p><b>Price: </b> {bean.price}</p>
      <button className="green two-buttons" onClick={props.onClickingEdit}>Update</button>
      <button id="delete" onClick={() => onClickingDelete(bean.id)}>Delete</button>
    </React.Fragment>
  );
}
BeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default BeanDetail;
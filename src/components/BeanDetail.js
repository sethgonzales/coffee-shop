import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props) {
  const { bean, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{bean.name} Inventory Details</h1>
      <p><em>Origin: </em> {bean.origin}</p>
      <p><em>Roast: </em> {bean.roast}</p>
      <p><em>Inventory Weight (lbs): </em> {bean.weight}</p>
      <p><em>Price: </em> {bean.price}</p>
      <div className="navlinks-three">
        <button onClick={props.onClickingEdit}>Update Inventory Item</button>
        <button onClick={() => onClickingDelete(bean.id)}>Delete from Inventory</button>
      </div>
    </React.Fragment>
  );
}
BeanDetail.propTypes = {
  bean: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default BeanDetail;
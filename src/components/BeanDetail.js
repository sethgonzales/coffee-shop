import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props) {
  const { bean, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{bean.name} Details</h1>
      <p><em>Origin: </em> {bean.origin}</p>
      <p><em>Roast: </em> {bean.roast}</p>
      <p><em>Inventory Weight (lbs): </em> {bean.weight}</p>
      <p><em>Price: </em> {bean.price}</p>
      <button onClick={ props.onClickingEdit }>Update Bean</button> 
      <button onClick={()=> onClickingDelete(bean.id) }>Delete Bean</button> 
    </React.Fragment>
  );
}
BeanDetail.propTypes = {
  ticket: PropTypes.object, 
  onClickingDelete: PropTypes.func, 
  onClickingEdit: PropTypes.func 
} 

export default BeanDetail;
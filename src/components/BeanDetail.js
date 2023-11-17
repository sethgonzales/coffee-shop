import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props) {
  const { ticket, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>{props.name} Details</h1>
      <p><em>Origin: </em> {props.origin}</p>
      <p><em>Roast: </em> {props.roast}</p>
      <p><em>Inventory Weight (lbs): </em> {props.weight}</p>
      <p><em>Price: </em> {props.price}</p>
      <button onClick={ props.onClickingEdit }>Update Bean</button> 
      <button onClick={()=> onClickingDelete(ticket.id) }>Delete Bean</button> 
    </React.Fragment>
  );
}
BeanDetail.propTypes = {
  ticket: PropTypes.object, 
  onClickingDelete: PropTypes.func, 
  onClickingEdit: PropTypes.func 
} 

export default BeanDetail;
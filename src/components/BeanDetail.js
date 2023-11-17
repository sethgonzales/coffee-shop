import React from "react";
import PropTypes from "prop-types";

function BeanDetail(props) {
  return (
    <React.Fragment>
      <h1>{props.name} Details</h1>
      <p><em>Origin: </em> {props.origin}</p>
      <p><em>Roast: </em> {props.roast}</p>
      <p><em>Inventory Weight (lbs): </em> {props.weight}</p>
      <p><em>Price: </em> {props.price}</p>
    </React.Fragment>
  )
}
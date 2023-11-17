import React from "react";
import PropTypes from "prop-types";


function Bean(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBeanClicked(props.id)}>
        <h3>{props.name}</h3>
        <p><b>Origin: </b> {props.origin}</p>
        <p><b>Roast: </b> {props.roast}</p>
        <p><b>Inventory Weight (lbs): </b> {props.weight}</p>
        <p><b>Price: </b> {props.price}</p>
      </div>
    </React.Fragment>
  );
}

Bean.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  roast: PropTypes.string.isRequired,
  weight: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenBeanClicked: PropTypes.func 
};

export default Bean;
import React from "react";
import PropTypes from "prop-types";


function Bean(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenBeanClicked(props.id)}>
        <h3>{props.name}</h3>
        <p><em>Origin: </em> {props.origin}</p>
        <p><em>Roast: </em> {props.roast}</p>
        <p><em>Inventory Weight (lbs): </em> {props.weight}</p>
        <p><em>Price: </em> {props.price}</p>
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
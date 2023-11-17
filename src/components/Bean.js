import React from "react";
import PropTypes from "prop-types";
import BeanBag from './../img/bag-icon.png'


function Bean(props) {
  return (
    <React.Fragment>
      <div className="hover" onClick={() => props.whenBeanClicked(props.id)}>
        <img src={BeanBag} className="beanbag-img" alt="bag of beans"></img>
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
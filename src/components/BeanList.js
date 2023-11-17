import React from 'react';
import PropTypes from "prop-types";
import Bean from './Bean';

function BeanList(props) {
  return (
    <React.Fragment>
      <h1>Coffee Bean Inventory</h1>
      {props.beanList.map((bean) =>
        <Bean
          whenBeanClicked={props.onBeanSelection}
          name={bean.name}
          origin={bean.origin}
          roast={bean.roast}
          weight={bean.weight}
          price={bean.price}
          id={bean.id}
          key={bean.id} />
      )}
    </React.Fragment>
  )
}

BeanList.propTypes = {
  beanList: PropTypes.array,
  onBeanSelection: PropTypes.func
}

export default BeanList;
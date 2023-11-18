import React from 'react';
import PropTypes from "prop-types";
import Bean from './Bean';

function BeanList(props) {
  const handleSoldBag = (beanId) => {
    const updatedList = props.beanList.map(bean => {
      if (bean.id === beanId && bean.weight > 0) {
        return { ...bean, weight: bean.weight - 1 }; 
      }
      return bean;
    });
    props.onSoldBag(updatedList);
  };


  return (
    <React.Fragment>
      <h1>Coffee Bean Inventory</h1>
      {props.beanList.map((bean) =>
        <div className="list-item"  key={bean.id}>
          <Bean
            whenBeanClicked={props.onBeanSelection}
            name={bean.name}
            origin={bean.origin}
            roast={bean.roast}
            weight={parseInt(bean.weight)}
            price={parseFloat(bean.price)}
            id={bean.id}
          />
          <button id="sold" className="green"  onClick={() => handleSoldBag(bean.id)}>Sold Bag</button>
          <hr />
        </div>
      )}
    </React.Fragment>
  )
}

BeanList.propTypes = {
  beanList: PropTypes.array,
  onBeanSelection: PropTypes.func,
  onSoldBag: PropTypes.func
}

export default BeanList;
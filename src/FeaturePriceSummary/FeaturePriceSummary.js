import React from 'react';
import FeaturePrice from '../FeaturePrice/FeaturePrice';



function FeaturePriceSummary(props){

  // Object.keys(this.state.selected).map(key => (
  const total = Object.keys(this.state.selected).reduce(
      (acc, curr) => acc + this.state.selected[curr].cost,
      0
    );
  return (
  <section className="main__summary">
  <h3>NEW GREENLEAF 2018</h3>
  <FeaturePrice 
  price ={props.price}/>
  <div className="summary__total">
    <div className="summary__total__label">Your Price: </div>
    <div className="summary__total__value">
      {new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(total)}
    </div>
  </div>
</section>
);

}

export default FeaturePriceSummary;
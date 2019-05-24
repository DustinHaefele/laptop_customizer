import React from "react";
import FeaturePrice from "../FeaturePrice/FeaturePrice";
import './FeaturePriceSummary.css';

function FeaturePriceSummary(props) {
  const total = Object.keys(props.selected).reduce(
    (acc, curr) => acc + props.selected[curr].cost,
    0
  );

  return (
    <section className="main__summary">
      <h3>NEW GREENLEAF 2018</h3>

      {Object.keys(props.selected).map(key => {
        return (
          <div key={key}>
            <FeaturePrice
              myKey={key}
              cost={props.selected[key].cost}
              name={props.selected[key].name}
            />
          </div>
        );
      })}

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

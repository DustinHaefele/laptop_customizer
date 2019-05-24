import React from "react";


export default function FeaturePrice(props) {
  
    return (
      <div className="summary__option" key={props.feature}>
        <div className="summary__option__label">{props.feature} </div>
        <div className="summary__option__value">
          {props.feature.name}
        </div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(props.feature.cost)}
        </div>
      </div>
    );
}

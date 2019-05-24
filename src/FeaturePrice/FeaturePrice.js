import React from "react";


function FeaturePrice(props) {
  
    return (
      <div className="summary__option" key={props.myKey}>
        <div className="summary__option__label">{props.myKey} </div>
        <div className="summary__option__value">
          {props.name}
        </div>
        <div className="summary__option__cost">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(props.cost)}
        </div>
      </div>
    );
}

export default FeaturePrice;
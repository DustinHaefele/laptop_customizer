import React from "react";


export default function FeaturePrice(props) {
  
    return (
      <div className="summary__option" key={props.key}>
        <div className="summary__option__label">{props.key} </div>
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

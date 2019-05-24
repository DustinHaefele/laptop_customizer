import React from "react";
import Feature from "../Feature/Feature";

export default function FeatureChoiceForm(props) {
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      {Object.keys(props.features).map(key => {
        return <Feature options={props.features[key]} key={key} selected={props.selected} handleUpdate={props.handleUpdate} />;
      })}
    </section>
  );
}

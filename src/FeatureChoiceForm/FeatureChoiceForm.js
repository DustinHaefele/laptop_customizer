import React from "react";
import Feature from "../Feature/Feature";

function FeatureChoiceForm(props) {
  return (
    <section className="main__form">
      <h3>TECH SPECS AND CUSTOMIZATIONS</h3>
      {Object.keys(props.features).map(key => {
        return (
        <div key={key}>
          <Feature options={props.features[key]} myKey={key} selected={props.selected} handleUpdate={props.handleUpdate} />
        </div>
      );
      })}
    </section>
  );
}

export default FeatureChoiceForm;
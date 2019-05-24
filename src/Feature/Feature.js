import React from 'react';

function Feature(props) {
  console.log(props);
  let options = props.options.map((item, index) => 
  {
    // debugger;
    const selectedClass =
      item.name === props.selected[props.myKey].name
        ? "feature__selected"
        : "";
    const featureClass = "feature__option " + selectedClass;
    return (
      <li key={index} className="feature__item">
        <div
          className={featureClass}
          onClick={(e) => props.handleUpdate(props.myKey, item)}
        >
          {item.name}(
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
          }).format(item.cost)}
          )
        </div>
      </li>
    );
  });

  return (
    <div className="feature" key={props.key}>
      <div className="feature__name">{props.key}</div>
      <ul className="feature__list">{options}</ul>
    </div>
  );
}

export default Feature;


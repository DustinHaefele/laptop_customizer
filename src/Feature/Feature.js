import React from 'react';

export default function Feature(props) {

  let options = props.options.map((item, index) => 
  {
    const selectedClass =
      item.name === props.selected[props.key].name
        ? "feature__selected"
        : "";
    const featureClass = "feature__option " + selectedClass;
    return (
      <li key={index} className="feature__item">
        <div
          className={featureClass}
          onClick={(e) => props.handleUpdate(props.key, item)}
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


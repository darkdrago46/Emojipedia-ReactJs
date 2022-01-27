import React from "react";

function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.img}
        </span>
        <span>{props.title}</span>
      </dt>
      <dd>{props.desp}</dd>
    </div>
  );
}

export default Entry;

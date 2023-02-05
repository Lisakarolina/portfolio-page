import React from "react";

function SkillCard(props) {
  return (
    <div className="skill-card">
      {props.img}
      <div id="content-field">
        <h3 id="heading-line">{props.title}</h3>
      </div>
    </div>
  );
}

export default SkillCard;

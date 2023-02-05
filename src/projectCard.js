import React from "react";
import Icon from "@mdi/react";
import { mdiOpenInNew, mdiGithub } from "@mdi/js";

function ProjectCard(props) {
  return (
    <div className="card">
      <img src={props.img} />
      <div id="contentWrapper">
        <div id="content-field">
          <div id="wrapper">
            <h3 id="heading-line">{props.title}</h3>
            <div id="project-descr">{props.description}</div>
          </div>
        </div>
        <div id="link-line">
          <Icon
            className="icon"
            path={mdiGithub}
            title="github"
            size={1}
            onClick={function () {
              openURL(props.gitURL);
            }}
          />
          <Icon
            className="icon"
            path={mdiOpenInNew}
            title="open site in new tab"
            size={1}
            onClick={function () {
              openURL(props.liveURL);
            }}
          />
        </div>
      </div>
    </div>
  );
}

function openURL(url) {
  window.open(url, "_blank");
}

export default ProjectCard;

import React from "react";
import "./EditButton.css";

const button = props => (
  <button className="EditButton-edit" onClick={props.clicked}>{props.label}</button>
);

export default button;

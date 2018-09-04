import React from "react";
import "./DeleteButton.css";

const button = props => (
  <button className="DeleteButton-delete" onClick={props.clicked}>{props.label}</button>
);

export default button;

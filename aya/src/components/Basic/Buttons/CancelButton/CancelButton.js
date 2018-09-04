import React from "react";
import "./CancelButton.css";

const button = props => (
  <button className="CancelButton-cancel" onClick={props.clicked}>{props.label}</button>
);

export default button;

import React from "react";
import "./SubmitButton.css";

const button = props => (
  <button className="SubmitButton-submit" onClick={props.clicked}>{props.label}</button>
);

export default button;

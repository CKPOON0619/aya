import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import "./SubmitButton.css";
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const button = props => (
  <div className="SubmitButton-submit">
    <Button variant="contained" color="primary" onClick={props.clicked}>{props.label}</Button>
  </div>
);

export default withStyles(styles)(button);
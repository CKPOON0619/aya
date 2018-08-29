import React, { Component } from 'react';

class ClickButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(evt) {
        this.props.onClick(evt)
    }
  
    render() {    
      // Setup the dnd listeners.
      return <button type="button" className="App-train" onClick={this.handleClick}>{this.props.message}</button>
    }
  }

  export default ClickButton
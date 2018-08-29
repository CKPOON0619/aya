import React, { Component } from 'react';

class DropFile extends Component {
    constructor(props) {
        super(props);
        this.handleFileSelect = this.handleFileSelect.bind(this);
        this.handleDragOver=this.handleDragOver.bind(this);
      }
    handleFileSelect(evt) {
        this.props.onDrop(evt);
    }
  
    handleDragOver(evt) {
        this.props.onDragOver(evt);
    }
    render() {    
        console.log(this.props.list)
      // Setup the dnd listeners.
      return <div className="App-dropzone" onDrop={this.handleFileSelect} onDragOver={this.handleDragOver}> 
        {this.props.list}
        </div>
    }
  }

  export default DropFile
import React, { Component } from 'react';
import './Dropfile.css'; 

class DropFile extends Component {
    constructor(props) {
        super(props);
        this.handleFileSelect = this.handleFileSelect.bind(this);
        this.handleDragOver=this.handleDragOver.bind(this);
      }
    handleFileSelect(evt) {
        //evt.stopPropagation();
        //evt.preventDefault();
        this.props.onDrop(evt);
    }
  
    handleDragOver(evt) {
        //evt.stopPropagation();
        //evt.preventDefault();
        this.props.onDragOver(evt);
    }
    render() {    
      // Setup the dnd listeners.
      return <div className="Dropfile-dropzone" onDrop={this.handleFileSelect} onDragOver={this.handleDragOver}> 
        {this.props.list}
        </div>
    }
  }

  export default DropFile
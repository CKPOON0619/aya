import React, { Component } from 'react';
import './Dropfile.css'; 

class DropFile extends Component {
    constructor(props) {
      super(props);
      this.displayList=[];
      // files is a FileList of File objects. List some properties.
      if(props.files) {
        for (let i = 0, f; (f = props.files[i])&&i<4; i++) {
          console.log(f.type)
          this.displayList.push(
            <li key={'f'+i.toString()+'_'+f.name}>
                <strong> 
                    {escape(f.name)}
                </strong> 
                ( {f.type || 'n/a'} ) - {f.size} bytes last modified: {f.lastModifiedDate.toLocaleDateString()}
            </li>
          )
        }; 
      };
    }
    handleFileSelect(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      this.props.onDrop(evt,this.props.key,this.props.allowedTypes,this.props.limit);
    }
  
    handleDragOver(evt) {
      evt.stopPropagation();
      evt.preventDefault();
      this.props.onDragOver(evt);
    }
    render() {    
      // Setup the dnd listeners.
      return <div className="Dropfile-dropzone" onDrop={this.handleFileSelect} onDragOver={this.handleDragOver} style={this.props.style} accept={".txt"}> 
        <ul>
          {this.displayList.length > 0
            ? this.displayList
            : <strong>{this.props.placeholder}</strong>}
        </ul>
        </div>
    }
  }

  export default DropFile
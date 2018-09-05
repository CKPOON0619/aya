import React, { Component } from 'react';
import './Dropfile.css'; 

class DropFile extends Component {
    constructor(props) {
        super(props);
        this.handleFileSelect = this.handleFileSelect.bind(this);
        this.handleDragOver=this.handleDragOver.bind(this);
        this.displayList=[]
      }
    handleFileSelect(evt) {
        //evt.stopPropagation();
        //evt.preventDefault();
        this.props.onDrop(evt);
        var files = evt.dataTransfer.files; // FileList object.
        // files is a FileList of File objects. List some properties.
        
        for (let i = 0, f; (f = files[i])&&i<4; i++) {
          console.log(f.type)
          var allowed=this.props.allowedTypes.map((t)=>f.type===t).reduce((a,b)=>a+b)>0
          if(allowed){ 
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
  
    handleDragOver(evt) {
        this.props.onDragOver(evt);
    }
    render() {    
      // Setup the dnd listeners.
      return <div className="Dropfile-dropzone" onDrop={this.handleFileSelect} onDragOver={this.handleDragOver} style={this.props.style}> 
        <ul>
          {this.displayList.length > 0
            ? this.displayList
            : <strong>{this.props.placeholder}</strong>}
        </ul>
        </div>
    }
  }

  export default DropFile
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class DropFile extends Component {
  handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; // FileList object.
    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
      output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
                  f.size, ' bytes, last modified: ',
                  f.lastModifiedDate.toLocaleDateString(), '</li>');
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
  }

  handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }
  render() {
    // Setup the dnd listeners.
    return <div id="drop_zone" onDrop={this.handleFileSelect} onDragOver={this.handleDragOver}> Drop files here</div>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id='list'></div>
        <DropFile/>
      </div>
    );
  }
}

export default App;

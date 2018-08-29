import React, { Component } from "react";
import DropFile from "../components/Dropfile/DropFile";
import SubmitButton from '../components/Buttons/SubmitButton/SubmitButton'; 
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleInputSelect = this.handleInputSelect.bind(this);
    this.handlePredictionSelect = this.handlePredictionSelect.bind(this);
    this.handleTrain = this.handleTrain.bind(this);
    this.handlePredict = this.handlePredict.bind(this);
    this.handleDownload = this.handleDownload.bind(this);

    this.state = {
      inputs: null,
      predictions: null,
      trained: false,
      predicted: false,
      download: null
    };
  }

  handleInputSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; // FileList object.
    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; (f = files[i])&&i<4; i++) {
      if((f.type=='text/csv')||(f.type=='text/plain')) output.push(
        <li key={'f'+i.toString()+'_'+f.name}>
            <strong> 
                {escape(f.name)}
            </strong> 
            ( {f.type || 'n/a'} ) - {f.size} bytes last modified: {f.lastModifiedDate.toLocaleDateString()}
        </li>
    )}
    this.setState({
      inputs:evt.dataTransfer.files, 
      inputFilesLst:<ul>{output.length>0?output:'Drop your training inputs(.csv/.txt) here'}</ul>
    })
  }
  handlePredictionSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var files = evt.dataTransfer.files; // FileList object.
    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; (f = files[i])&&i<4; i++) {
      if((f.type=='text/csv')||(f.type=='text/plain')) output.push(
        <li key={'f'+i.toString()+'_'+f.name}>
            <strong> 
                {escape(f.name)}
            </strong> 
            ( {f.type || 'n/a'} ) - {f.size} bytes last modified: {f.lastModifiedDate.toLocaleDateString()}
        </li>
    )}
    this.setState({
      predictions:evt.dataTransfer.files, 
      predictionFilesLst:<ul>{output.length>0?output:'Drop your dataset for prediction(.csv/.txt) here'}</ul>
    })
  }

  handleFileDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "copy"; // Explicitly show this is a copy.
  }

  handleTrain() {console.log('clicked Train')}

  handlePredict() {}

  handleDownload() {}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Aya</h1>
        </header>
        <DropFile
          id="input_dropZone"
          onDrop={this.handleInputSelect}
          onDragOver={this.handleFileDragOver}
          list={
            this.state.inputFilesLst
              ? this.state.inputFilesLst
              : "Drop inputs here"
          }
        />
        <SubmitButton 
          clicked={this.handleTrain} 
          label={'Train'}
        />
        <DropFile
          id="predict_dropZone"
          onDrop={this.handlePredictionSelect}
          onDragOver={this.handleFileDragOver}
          list={
            this.state.predictionFilesLst
              ? this.state.predictionFilesLst
              : "Drop prediction here"
          }
        />
        <SubmitButton 
          clicked={this.handlePredict} 
          label='Predict'
        />
        <SubmitButton 
          clicked={this.handleDownload} 
          label='Download'
        />
      </div>
    );
  }
}

export default App;

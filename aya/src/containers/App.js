import React, { Component } from "react";
import DropFile from "../components/Dropfile/DropFile";
import SubmitButton from "../components/Buttons/SubmitButton/SubmitButton";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.handleModelSelect = require("../components/Dropfile/actions/handleSelect/handleModelSelect").default.bind(this);
    this.handleModelUpload = require("../components/Buttons/SubmitButton/actions/handleClick/handleModelUpload").default.bind(this);
    this.handleModelDownload = require("../components/Buttons/SubmitButton/actions/handleClick/handleModelDownload").default.bind(this);
    this.handleInputSelect = require("../components/Dropfile/actions/handleSelect/handleInputSelect").default.bind(this);
    this.handlePredictionSelect = require("../components/Dropfile/actions/handleSelect/handlePredictionSelect").default.bind(this);
    this.handleTrain = require("../components/Buttons/SubmitButton/actions/handleClick/handleTrain").default.bind(this);
    this.handlePredict = require("../components/Buttons/SubmitButton/actions/handleClick/handlePredict").default.bind(this);
    this.handleDownload = require("../components/Buttons/SubmitButton/actions/handleClick/handleDownload").default.bind(this);
    this.handleFileDragOver=require("../components/Dropfile/actions/handleDragOver/handleFileDragOver").default.bind(this);
    
    this.state = {
      inputs: null,
      dataDim:null,
      inputData:[],
      inputModel:null,
      inputModelFiles:[],
      inputLabel:[],
      modelTrained:null,
      predData:[],
      predFiles:null,
      predictions: null,
      trained: false,
      predicted: false,
      download: null
    };
  }

  //componentDidMount () {
  //  const script = document.createElement("script");
  //  script.src = "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@0.12.5";
  //  script.type = 'text/javascript'
  //  script.async = true;
  //  document.head.appendChild(script);
  //}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Aya</h1>
        </header>
        <DropFile
          id="model_dropZone"
          onDrop={this.handleModelSelect}
          onDragOver={this.handleFileDragOver}
          allowedTypes={["application/json","application/octet-stream"]}
          placeholder="Drop saved model here"
        />
        <SubmitButton 
          clicked={this.handleModelUpload}
          label="Load model"
        />
        <DropFile
          id="input_dropZone"
          onDrop={this.handleInputSelect}
          onDragOver={this.handleFileDragOver}
          allowedTypes={["text/csv","text/plain"]}
          placeholder="Drop inputs here"
        />
        <SubmitButton 
          id="train_button"
          clicked={this.handleTrain} 
          label={"Train"}
        />
        <DropFile
          id="predict_dropZone"
          onDrop={this.handlePredictionSelect}
          onDragOver={this.handleFileDragOver}
          allowedTypes={["text/csv","text/plain"]}
          placeholder= "Drop prediction here"
        />
        <SubmitButton 
          id="saveModel_button"
          clicked={this.handleModelDownload}
          label="Save Model"
        />
        <SubmitButton
          id="predict_button"
          clicked={this.handlePredict}
          label="Predict"
        />
        <SubmitButton 
          id="download_button"
          clicked={this.handleDownload} 
          label="Download" 
        />
      </div>
    );
  }
}

export default App;

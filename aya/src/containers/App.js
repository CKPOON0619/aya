import React, { Component } from "react";
import {ModelUpload} from "../components/Complex/ModelUpload";
import {ModelTrain} from "../components/Complex/ModelTrain";
import {ModelPredict} from "../components/Complex/ModelPredict";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.handleModelSelect = require("../components/Basic/Dropfile/actions/handleSelect/handleModelSelect").default.bind(this);
    this.handleModelUpload = require("../components/Basic/Buttons/SubmitButton/actions/handleClick/handleModelUpload").default.bind(this);
    this.handleModelDownload = require("../components/Basic/Buttons/SubmitButton/actions/handleClick/handleModelDownload").default.bind(this);
    this.handleInputSelect = require("../components/Basic/Dropfile/actions/handleSelect/handleInputSelect").default.bind(this);
    this.handlePredictionSelect = require("../components/Basic/Dropfile/actions/handleSelect/handlePredictionSelect").default.bind(this);
    this.handleTrain = require("../components/Basic/Buttons/SubmitButton/actions/handleClick/handleTrain").default.bind(this);
    this.handlePredict = require("../components/Basic/Buttons/SubmitButton/actions/handleClick/handlePredict").default.bind(this);
    this.handleDownload = require("../components/Basic/Buttons/SubmitButton/actions/handleClick/handleDownload").default.bind(this);
    this.handleFileDragOver=require("../components/Basic/Dropfile/actions/handleDragOver/handleFileDragOver").default.bind(this);
    
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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Aya</h1>
        </header>
        <ModelUpload
          onDrop={this.handleModelSelect}
          onDragOver={this.handleFileDragOver}
          clicked={this.handleModelUpload}
        />
        <ModelTrain
          onDrop={this.handleInputSelect}
          onDragOver={this.handleFileDragOver}
          clicked={this.handleTrain}
        />
        <ModelPredict 
          onDrop={this.handlePredictionSelect}
          onDragOver={this.handleFileDragOver}
          clickedPredict={this.handlePredict}
          clickedSaveModel={this.handleModelDownload}
          clickedDownload={this.handleDownload}
        />

      </div>
    );
  }
}

export default App;

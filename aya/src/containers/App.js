import React, { Component } from "react";
import {ModelUpload} from "../components/Complex/ModelUpload";
import {ModelTrain} from "../components/Complex/ModelTrain";
import {ModelPredict} from "../components/Complex/ModelPredict";
import "./App.css";

import LongMenu from "../components/Complex/LongMenu"

class App extends Component {
  constructor(props) {
    super(props);
    this.handleMenuClick = require("../actions/handleClick/handleMenuClick").default.bind(this);
    this.handleModelSelect = require("../actions/handleSelect/handleModelSelect").default.bind(this);
    this.handleModelUpload = require("../actions/handleClick/handleModelUpload").default.bind(this);
    this.handleModelDownload = require("../actions/handleClick/handleModelDownload").default.bind(this);
    this.handleInputSelect = require("../actions/handleSelect/handleInputSelect").default.bind(this);
    this.handlePredictionSelect = require("../actions/handleSelect/handlePredictionSelect").default.bind(this);
    this.handleTrain = require("../actions/handleClick/handleTrain").default.bind(this);
    this.handlePredict = require("../actions/handleClick/handlePredict").default.bind(this);
    this.handleDownload = require("../actions/handleClick/handleDownload").default.bind(this);
    this.handleFileDragOver=require("../actions/handleDragOver/handleFileDragOver").default.bind(this);
    
    this.state = {
      stage:"modelUpload",
      dataDim:null,
      inputFiles: null,
      inputData:[],
      inputLabel:[],
      modelFiles:null,
      modelTrained:null,
      predData:[],
      predFiles:null,
      predictions: null,
      trained: false,
      predicted: false,
      download: null
    };
  }

  //A switch that decides what to be rendered based on different stage in the state
  contentStager(stage){
    switch(stage) { 
      case "modelUpload": { 
         return <ModelUpload
          style={{width:500, height:150}}
          files={this.state.modelFiles}
          onChange={this.handleModelSelect}
          clicked={this.handleModelUpload}
        />;
      } 
      case "modelTrain": { 
         //statements;
         return <ModelTrain
          files={this.state.inputFiles}
          onChange={this.handleInputSelect}
          clicked={this.handleTrain}
        />; 
      } 
      case "modelPredict": { 
        //statements;
        return <ModelPredict 
          files={this.state.predFiles}
          onChange={this.handlePredictionSelect}
          clickedPredict={this.handlePredict}
          clickedSaveModel={this.handleModelDownload}
          clickedDownload={this.handleDownload}
        />; 
     } 
      default: { 
         //statements; 
         break; 
      } 
    
    }
  }

  render() {
    return (
      <div className="App">         
        <header id="App-header">
          <LongMenu id="menu-button" pick={this.handleMenuClick}/>
          <h1 id="Aya">Aya</h1>
        </header>
        <div id="stage">
          {this.contentStager(this.state.stage)}
        </div>
      </div>
    );
  }
}

export default App;

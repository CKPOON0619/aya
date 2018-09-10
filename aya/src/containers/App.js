import React, { Component } from "react";
import {ModelUpload} from "../components/Complex/ModelUpload";
import {ModelTrain} from "../components/Complex/ModelTrain";
import {ModelPredict} from "../components/Complex/ModelPredict";
import "./App.css";

import LongMenu from "../components/Complex/LongMenu"
import ProgressBar from "../components/Basic/ProgressBar/ProgressBar"

class App extends Component {
  constructor(props) {
    super(props);
    this.store=props.store;
    this.handleMenuClick = require("../events/handleMenuClick").default.bind(this);
    this.handleFileSelect = require("../events/handleFileSelect").default.bind(this);
    this.handleModelUpload = require("../events/handleModelUpload").default.bind(this);
    this.handleModelDownload = require("../events/handleModelDownload").default.bind(this);
    this.handleInputSelect = require("../events/handleInputSelect").default.bind(this);
    this.handlePredictionSelect = require("../events/handlePredictionSelect").default.bind(this);
    this.handleTrain = require("../events/handleTrain").default.bind(this);
    this.handlePredict = require("../events/handlePredict").default.bind(this);
    this.handleDownload = require("../events/handleDownload").default.bind(this);
    this.handleFileDrops = require("../events/handleFileDrops").default.bind(this);
  }

  //A switch that decides what to be rendered based on different stage in the state
  contentStager(stage){
    switch(stage) { 
      case "modelUpload": { 
        return <ModelUpload
          style={{width:500, height:150}}
          files={this.store.getState().modelFiles}
          onDrop={(evt)=>this.handleFileDrops(evt,"modelFiles",["application/json","application/octet-stream"],2)}
          onChange={(evt)=>this.handleFileSelect(evt,"modelFiles",["application/json","application/octet-stream"],2)}
          clicked={this.handleModelUpload}
        />;
      } 
      case "modelTrain": { 
        return <ModelTrain
          files={this.store.getState().inputFiles}
          onDrop={(evt)=>this.handleFileDrops(evt,"inputFiles",["text/plain"],4)}
          onChange={(evt)=>this.handleFileSelect(evt,"inputFiles",["text/plain"],4)}
          clicked={this.handleTrain}
        />; 
      } 
      case "modelPredict": { 
        return <ModelPredict 
          files={this.store.getState().predFiles}
          onChange={this.handlePredictionSelect}
          onDrop={(evt)=>this.handleFileDrops(evt,"predFiles",["text/plain"],1)}
          onChange={(evt)=>this.handleFileSelect(evt,"predFiles",["text/plain"],1)}
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
    let state=this.store.getState();
    return (
      <div className="App">         
        <header id="App-header">
          <LongMenu id="menu-button" pick={this.handleMenuClick}/>
          <h1 id="Aya">Aya</h1>
          {
            (
              state.stage==="modelUpload"&&
              state.modelStatus!=="MODEL_UPLOAD_S2"&&
              state.modelStatus!==null&&
              state.modelStatus!=="MODEL_UPLOAD_FAILED"
            )?
            <ProgressBar color="secondary"/>:
            <div/>
          }
          {
            (
              state.stage==="modelTrain"&&
              state.trainingStatus!=="MODEL_FITTED"&&
              state.trainingStatus!==null
            )?
            <ProgressBar color="secondary"/>:
            <div/>
          }
          {
            (
              state.stage==="modelPred"&&
              state.predStatus!=="FILES_READ"&&
              state.predStatus!==null
            )?
            <ProgressBar color="secondary"/>:
            <div/>
          }
        </header>
        <div id="stage">
          {this.contentStager(state.stage)}
        </div>
      </div>
    );
  }
}

export default App;

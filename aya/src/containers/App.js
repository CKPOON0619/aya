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
    this.handleModelSelect = require("../events/handleModelSelect").default.bind(this);
    this.handleModelUpload = require("../events/handleModelUpload").default.bind(this);
    this.handleModelDownload = require("../events/handleModelDownload").default.bind(this);
    this.handleInputSelect = require("../events/handleInputSelect").default.bind(this);
    this.handlePredictionSelect = require("../events/handlePredictionSelect").default.bind(this);
    this.handleTrain = require("../events/handleTrain").default.bind(this);
    this.handlePredict = require("../events/handlePredict").default.bind(this);
    this.handleDownload = require("../events/handleDownload").default.bind(this);
  }

  //A switch that decides what to be rendered based on different stage in the state
  contentStager(stage){
    switch(stage) { 
      case "modelUpload": { 
        return <ModelUpload
          style={{width:500, height:150}}
          files={this.store.getState().modelFiles}
          onChange={this.handleModelSelect}
          clicked={this.handleModelUpload}
        />;
      } 
      case "modelTrain": { 
         //statements;
        return <ModelTrain
          files={this.store.getState().inputFiles}
          onChange={this.handleInputSelect}
          clicked={this.handleTrain}
        />; 
      } 
      case "modelPredict": { 
        //statements;
        return <ModelPredict 
          files={this.store.getState().predFiles}
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

import React, { Component } from "react";
import DropFile from "../components/Dropfile/DropFile";
import SubmitButton from "../components/Buttons/SubmitButton/SubmitButton";
import * as tf from '@tensorflow/tfjs';
import makeModel from "../Models/model"
import "./App.css";
import { promises } from "fs";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleModelSelect = this.handleModelSelect.bind(this);
    this.handleModelUpload = this.handleModelUpload.bind(this);
    this.handleModelDownload = this.handleModelDownload.bind(this);
    this.handleInputSelect = this.handleInputSelect.bind(this);
    this.handlePredictionSelect = this.handlePredictionSelect.bind(this);
    this.handleTrain = this.handleTrain.bind(this);
    this.handlePredict = this.handlePredict.bind(this);
    this.handleDownload = this.handleDownload.bind(this);

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
  readUploadedFileAsText = (inputFile) => {
    const temporaryFileReader = new FileReader();
  
    return new Promise((resolve, reject) => {
      temporaryFileReader.onerror = () => {
        temporaryFileReader.abort();
        reject(new DOMException("Problem parsing input file."));
      };
  
      temporaryFileReader.onload = () => {
        resolve(temporaryFileReader.result);
      };
      temporaryFileReader.readAsText(inputFile);
    });
  }
  handleModelSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({
      inputModel: evt.dataTransfer.files
    });
  }

  handleModelUpload(evt) {
    tf.loadModel(
      this.state.inputModel[1].type==='application/json'?tf.io.browserFiles([this.state.inputModel[1], this.state.inputModel[0]]):tf.io.browserFiles([this.state.inputModel[0], this.state.inputModel[1]])
    ).then(model=>{
      this.setState({modelTrained:model})
      console.log('Model loaded!')
    })
  }

  handleInputSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({
      inputs: evt.dataTransfer.files
    });
  }

  handlePredictionSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({
      predFiles: evt.dataTransfer.files
    });
  }
  handleModelDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "copy"; // Explicitly show this is a copy.
  }
  handleFileDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "copy"; // Explicitly show this is a copy.
  }

  handleTrain() {
    var files = this.state.inputs; // FileList object.
    // files is a FileList of File objects. List some properties.
    var readers=[]
    for (var i = 0, f; (f = files[i])&&i<4; i++) {
      if((f.type==='text/csv')||(f.type==='text/plain')){ 
        readers.push(this.readUploadedFileAsText(f))
      };
    }; 
    Promise.all(readers).then(filesRead=>{
      filesRead.forEach(f=>{
        var arrData=f.split('\n').slice(1).map(row=>row.split(','));
        this.setState((prevState, props) => ({
          inputData: prevState.inputData.concat(arrData.map(row=>row.slice(0,-1))),
          inputLabel: prevState.inputLabel.concat(arrData.map(row=>row.slice(-1)))
        }))
      })
      console.log('Data uploaded. Training model...')
      if(this.state.modelTrained==null){
        var model=makeModel([this.state.inputData[0].length])
      }else{
        model = this.state.modelTrained;
      }
      var xs=tf.tensor2d(this.state.inputData)
      var ys=tf.tensor2d(this.state.inputLabel)
      
      model.fit(xs, ys, {
        epochs: 5,
        callbacks: {
          onEpochEnd: async (epoch, log) => {
            console.log(`Epoch ${epoch}: loss = ${log.loss}`);
          }
        }
      }).then(r=>{this.setState({modelTrained:model})})
    })
  }

  handlePredict() {
    var files = this.state.predFiles; // FileList object.
    var readers=[];
    for (var i = 0, f; (f = files[i]) && i < 4; i++) {
      if (f.type === "text/csv" || f.type === "text/plain"){
        readers.push(this.readUploadedFileAsText(f))
      }
    }  
    Promise.all(readers).then(filesRead=>{
      filesRead.forEach(f=>{
        var arrData=f.split('\n').slice(1).map(row=>row.split(','));
        this.setState((prevState, props) => ({
          predData: prevState.predData.concat(arrData)
        }))
      })
      var predictions=this.state.modelTrained.predict(tf.tensor2d(this.state.predData))
      predictions.print()
      this.setState({predictions:predictions})
    }) 
  }
  handleModelDownload() {
    this.state.modelTrained.save('downloads://Aya-knows')
  }
  handleDownload() {
    this.state.predictions.data().then(X =>{ 
      var FileSaver = require('file-saver');
      var blob = new Blob([['predictions'].concat(X.join('\n')).join('\n')], {type: "text/plain;charset=utf-8"});
      FileSaver.saveAs(blob, "Predictions.csv");
      
    })
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
          onDragOver={this.handleModelDragOver}
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

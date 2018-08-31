import React, { Component } from "react";
import DropFile from "../components/Dropfile/DropFile";
import SubmitButton from "../components/Buttons/SubmitButton/SubmitButton";
import EditButton from "../components/Buttons/EditButton/EditButton";
import * as tf from '@tensorflow/tfjs';
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
      dataDim:null,
      inputData:[],
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

  handleInputSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var container=this;//Get reference to the container.
    var files = evt.dataTransfer.files; // FileList object.
    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; (f = files[i])&&i<4; i++) {
      console.log(f.type)
      if((f.type==='text/csv')||(f.type==='text/plain')){ 
        output.push(
          <li key={'f'+i.toString()+'_'+f.name}>
              <strong> 
                  {escape(f.name)}
              </strong> 
              ( {f.type || 'n/a'} ) - {f.size} bytes last modified: {f.lastModifiedDate.toLocaleDateString()}
          </li>
        )
        var reader = new FileReader();
        reader.onload = function(event) {
          // The data will be read within this callback.
          // This callback will mutate the state through setState
          var rawData=event.target.result;
          var arrData=rawData.split('\n').slice(1).map(row=>row.split(','));

          container.setState((prevState, props) => ({
            inputData: prevState.inputData.concat(arrData.map(row=>row.slice(0,-1))),
            inputLabel: prevState.inputLabel.concat(arrData.map(row=>row.slice(-1)))
          }))
          
        };
        reader.readAsText(f);
        console.log('Data loading complete!')
      };
    };  
    this.setState({
      inputs: evt.dataTransfer.files,
      inputFilesLst: (
        <ul>
          {output.length > 0
            ? output
            : "Drop your training inputs(.csv/.txt) here"}
        </ul>
      )
    });
  }
  handlePredictionSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    var container=this;//Get reference to the container.
    var files = evt.dataTransfer.files; // FileList object.
    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; (f = files[i]) && i < 4; i++) {
      if (f.type === "text/csv" || f.type === "text/plain"){
        output.push(
          <li key={"f" + i.toString() + "_" + f.name}>
            <strong>{escape(f.name)}</strong>( {f.type || "n/a"} ) - {f.size}{" "}
            bytes last modified: {f.lastModifiedDate.toLocaleDateString()}
          </li>
        );
      }
      var reader = new FileReader();
      reader.onload = function(event) {
        // The data will be read within this callback.
        // This callback will mutate the state through setState
        var rawData=event.target.result;
        var arrData=rawData.split('\n').slice(1).map(row=>row.split(','));
        container.setState((prevState, props) => ({
          predData: prevState.inputData.concat(arrData),
        }));
      };
      reader.readAsText(f);
    }
    
    this.setState({
      predFiles: evt.dataTransfer.files,
      predictionFilesLst: (
        <ul>
          {output.length > 0
            ? output
            : "Drop your dataset for prediction(.csv/.txt) here"}
        </ul>
      )
    });
  }

  handleFileDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "copy"; // Explicitly show this is a copy.
  }

  handleTrain() {
    if(this.state.modelTrained==null){
      var model = tf.sequential();
      model.add(tf.layers.dense({units: 1000, activation: 'sigmoid', inputShape: [this.state.inputData[0].length]}));
      model.add(tf.layers.dense({units: 500, activation: 'relu'}));
      model.add(tf.layers.dense({units: 100, activation: 'relu'}));
      model.add(tf.layers.dense({units: 20, activation: 'relu'}));
      model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
      model.compile({optimizer: 'adam', loss: 'binaryCrossentropy'});
    }else{
      model = this.state.modelTrained;
    }
    var xs=tf.tensor2d(this.state.inputData)
    var ys=tf.tensor2d(this.state.inputLabel)
    model.fit(xs, ys, {
      epochs: 100,
      callbacks: {
        onEpochEnd: async (epoch, log) => {
          console.log(`Epoch ${epoch}: loss = ${log.loss}`);
        }
      }
    }).then(r=>{this.setState({modelTrained:model})})
    
    console.log("Trained :)");
  }

  handlePredict() {
    var predictions=this.state.modelTrained.predict(tf.tensor2d(this.state.predData))
    predictions.print();
    this.setState({predictions:predictions})
    console.log("Prediction made!")
    
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
          label={"Train"} 
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
        <EditButton 
          label={"Upload"} 
        />
        <SubmitButton
          clicked={this.handlePredict}
          label="Predict"
        />
        <SubmitButton 
          clicked={this.handleDownload} 
          label="Download" 
        />
      </div>
    );
  }
}

export default App;

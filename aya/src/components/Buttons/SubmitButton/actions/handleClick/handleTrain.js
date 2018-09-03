
import {readUploadedFileAsText} from "../../../../../utils/fileReader";
import * as tf from '@tensorflow/tfjs';
import makeModel from "./Models/model";

function handleTrain() {
    var files = this.state.inputs; // FileList object.
    // files is a FileList of File objects. List some properties.
    var readers=[]
    for (var i = 0, f; (f = files[i])&&i<4; i++) {
      if((f.type==='text/csv')||(f.type==='text/plain')){ 
        readers.push(readUploadedFileAsText(f))
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
export default handleTrain;

import {readUploadedFileAsText} from "../utils/fileReader"
import * as tf from '@tensorflow/tfjs';
function handlePredict() {
  try{
    var files = this.state.predFiles; // FileList object.
    var readers=[];
    for (var i = 0, f; (f = files[i]) && i < 4; i++) {
      if (f.type === "text/csv" || f.type === "text/plain"){
        readers.push(readUploadedFileAsText(f))
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
  }catch(err){
    console.warn(err)
  }; 
}

export default handlePredict;
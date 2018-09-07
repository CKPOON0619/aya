
import {readUploadedFileAsText} from "./utils/fileReader"
import * as tf from '@tensorflow/tfjs';
import * as actions from "./actions/index";
function handlePredict() {
  var state=this.store.getState();
  try{
    var files = state.predFiles; // FileList object.
    var readers=[];
    var predData=[];
    
    for (var i = 0, f; (f = files[i]) && i < 4; i++) {
      if (f.type === "text/csv" || f.type === "text/plain"){
        this.store.dispatch(actions.ReadingFiles());
        readers.push(readUploadedFileAsText(f))
      }
    }  
    Promise.all(readers).then(filesRead=>{
      this.store.dispatch(actions.FilesRead());
      filesRead.forEach(f=>{
        var arrData=f.split('\n').slice(1).map(row=>row.split(','));
        predData=predData.concat(arrData)
      })
      console.log(state.modelTrained)
      var predictions=state.modelTrained.predict(tf.tensor2d(predData))
      predictions.print()
      this.store.dispatch(actions.UploadPred(predictions));
    })
  }catch(err){
    console.warn(err)
  }; 
}

export default handlePredict;
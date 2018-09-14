
import * as tf from '@tensorflow/tfjs';
import * as actions from "./actions/index";
import {loadFrozenModel} from '@tensorflow/tfjs-converter';
async function handleModelUpload() {
  var state= this.store.getState();

  this.store.dispatch(actions.ModelUploading());

  try{
    tf.loadModel(
      state.modelFiles[1]?state.modelFiles[1].type==='application/json'?tf.io.browserFiles([state.modelFiles[1], state.modelFiles[0]]):tf.io.browserFiles([state.modelFiles[0], state.modelFiles[1]]):tf.io.browserFiles(state.modelFiles[0])
    ).then(model=>{
      this.store.dispatch(actions.ModelUploaded(model));
      console.log('Model loaded!')
    })}catch(err){
      this.store.dispatch(actions.ModelUploadFailed());
      console.log('Model loading failed!')
      console.warn(err)
  }
};
export default handleModelUpload;
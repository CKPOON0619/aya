
import * as tf from '@tensorflow/tfjs';
function handleModelUpload(evt) {
  try{
    tf.loadModel(
      this.state.modelFiles[1].type==='application/json'?tf.io.browserFiles([this.state.modelFiles[1], this.state.modelFiles[0]]):tf.io.browserFiles([this.state.modelFiles[0], this.state.modelFiles[1]])
    ).then(model=>{
      this.setState({modelTrained:model})
      console.log('Model loaded!')
    })}catch(err){

    }
  }
export default handleModelUpload;
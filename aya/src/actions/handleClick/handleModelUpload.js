import * as tf from "@tensorflow/tfjs";
function handleModelUpload(evt) {
  tf.loadModel(
    this.state.inputModel[1].type === "application/json"
      ? tf.io.browserFiles([this.state.inputModel[1], this.state.inputModel[0]])
      : tf.io.browserFiles([this.state.inputModel[0], this.state.inputModel[1]])
  ).then(model => {
    this.setState({ modelTrained: model });
    console.log("Model loaded!");
  });
}
export default handleModelUpload;

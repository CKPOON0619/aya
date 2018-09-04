import * as tf from '@tensorflow/tfjs';

// Load the binding:
//require('../node_modules/@tensorflow/tfjs-node');  // Use '@tensorflow/tfjs-node-gpu' if running with GPU.

// Train a simple model:
function makeModel(inputDim){
const model = tf.sequential();
  model.add(tf.layers.batchNormalization({inputShape: inputDim}))
  model.add(tf.layers.dense({units: 1000, activation: 'sigmoid'}));
  model.add(tf.layers.dropout({}));
  model.add(tf.layers.batchNormalization({center:true}))
  model.add(tf.layers.dense({units: 500, activation: 'relu'}));
  model.add(tf.layers.dropout({}));
  model.add(tf.layers.batchNormalization({}))
  model.add(tf.layers.dense({units: 100, activation: 'relu'}));
  model.add(tf.layers.dropout({}));
  model.add(tf.layers.batchNormalization({}))
  model.add(tf.layers.dense({units: 20, activation: 'relu'}));
  model.add(tf.layers.dropout({}));
  model.add(tf.layers.batchNormalization({}))
  model.add(tf.layers.dense({units: 1, activation: 'sigmoid'}));
  model.compile({optimizer: 'adam', loss: 'binaryCrossentropy'});
  return model
}
export default makeModel
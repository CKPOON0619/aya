const tf = require('../node_modules/@tensorflow/tfjs');

// Load the binding:
//require('../node_modules/@tensorflow/tfjs-node');  // Use '@tensorflow/tfjs-node-gpu' if running with GPU.

tf.multinomial(tf.tensor([.5, .5]), 100).reshape([100,1]).print();
// Train a simple model:
const model = tf.sequential();
model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
model.add(tf.layers.dense({units: 1, activation: 'softmax'}));
model.compile({optimizer: 'sgd', loss: 'binaryCrossentropy'});

const xs = tf.randomNormal([100, 10]);
const ys = tf.cast(tf.multinomial(tf.tensor([.1, .9]), 100).reshape([100,1]),'float32')
ys.print()
model.fit(xs, ys, {
  epochs: 100,
  callbacks: {
    onEpochEnd: async (epoch, log) => {
      console.log(`Epoch ${epoch}: loss = ${log.loss}`);
    }
  }
});
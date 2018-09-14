const tf=require('@tensorflow/tfjs');
const tf_converter=require('@tensorflow/tfjs-converter');

const model = tf_converter.loadFrozenModel('tensorflowjs_model.pb', 'weights_manifest.json').then(r=>console.log(r));
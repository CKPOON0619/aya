
import {readUploadedFileAsText} from "./utils/fileReader";
import * as tf from '@tensorflow/tfjs';
import makeModel from "./utils/Models/model";
import * as actions from "./actions/index";
function handleTrain() {
    var state=this.store.getState();
    try{
      var files = state.inputFiles; // FileList object.
      console.log(files)
      // files is a FileList of File objects. List some properties.
      var readers=[];
      var inputData=[];
      var inputLabel=[];
      var model=null;


      for (var i = 0, f; (f = files[i])&&i<4; i++) {
        this.store.dispatch(actions.ReadingFiles());
        readers.push(readUploadedFileAsText(f));
      }; 


      Promise.all(readers).then(filesRead=>{
        console.log('Reading complete! Trainig model...')
        
        this.store.dispatch(actions.FilesRead());

        filesRead.forEach(f=>{
          var arrData=f.split('\n').slice(1).map(row=>row.split(','));
          inputData=inputData.concat(arrData.map(row=>row.slice(0,-1)));
          inputLabel=inputLabel.concat(arrData.map(row=>row.slice(-1)));
        })

        if(state.modelTrained==null){
          model=makeModel([inputData[0].length])
        }else{
          model = state.modelTrained;
          model.compile({optimizer: 'adam', loss: 'binaryCrossentropy'});
        }
        var xs=tf.tensor2d(inputData)
        var ys=tf.tensor2d(inputLabel)
        
        this.store.dispatch(actions.ModelFitting())
        console.log('training....')
        return model.fit(xs, ys, {
          epochs: 5,
          callbacks: {
            onEpochEnd: async (epoch, log) => {
              console.log(`Epoch ${epoch}: loss = ${log.loss}`);
            }
          }
        })
      }).then(r=>{
        this.store.dispatch(actions.ModelFitted())
        this.store.dispatch(actions.ModelUploaded(model))
        console.log('model updated.')
      })
    }catch(err){
      console.warn(err)
    };
  }
export default handleTrain;
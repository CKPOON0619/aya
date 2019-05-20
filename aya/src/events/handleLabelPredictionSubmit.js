import * as actions from "./actions/index";
import * as use from '@tensorflow-models/universal-sentence-encoder';
import * as tf from '@tensorflow/tfjs';

function handleLabelPredictionSubmit() {
  this.store.dispatch(actions.TextInputLabelSubmitted());
  var state= this.store.getState();
  const model=state.encoderModel
  console.log({state})
  try{
    var textInput=state.textInput?state.textInput.split("\n"):[''];
    
    model.embed(textInput).then(embeddings => {
        const cosim=(a,b)=>tf.div(
          tf.div(tf.dot(a,b),tf.sqrt(tf.square(a).sum(1))),
          tf.sqrt(tf.square(b).sum(0))
        )
        //embeddings.map((embedding,i)=>{
        // const a=tf.tensor([[1,2,3],[4,5,6],[2,4,8],[2,4,8]])
        // const b=tf.tensor([2,2,2])
        // const test=tf.sqrt(tf.square(a).sum(1))
        // const test2=tf.dot(a,b)
          
        // console.log({test,test2})
        const group1=cosim(embeddings,state.embeddingsClass1).dataSync()
        const group2=cosim(embeddings,state.embeddingsClass2).dataSync()
        group1.forEach((element1,index) => {
          if(element1>group2[index]){
            this.store.dispatch(actions.PushInputTextTo('textLabel1',textInput[index]))
          }else{
            this.store.dispatch(actions.PushInputTextTo('textLabel2',textInput[index]))
          }
        })

    //     })

     })

  //   Promise.all(readers).then().then(r=>{
  //     this.store.dispatch(actions.ModelFitted())
  //     this.store.dispatch(actions.ModelUploaded(model))
  //     console.log('model updated.')
  //   })


  }catch(err){
    console.warn(err)
  };
};
export default handleLabelPredictionSubmit;
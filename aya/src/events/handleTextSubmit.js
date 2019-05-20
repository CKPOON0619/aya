import * as actions from "./actions/index";
import * as use from '@tensorflow-models/universal-sentence-encoder';

// async function handleTextSubmit() {
//   var state= this.store.getState();
//   this.store.dispatch(actions.TextInputSubmitted());

// };

function handleTextSubmit() {
    this.store.dispatch(actions.TextInputSubmitted())
    var state=this.store.getState();
    console.log({state})

    try{
      var text1=state.textLabel1?state.textLabel1.split("\n"):[''];
      var text2=state.textLabel2?state.textLabel2.split("\n"):[''];
      //var text3=state.textLabel2?state.textLabel3.split("\n"):[''];

      //this.store.dispatch(actions.textEmbedding())

        use.load().then(model => {
            this.store.dispatch(actions.StoreEncoder(model))
            // Embed an array of sentences.
            return Promise.all([
                model.embed(text1).then(embeddings => {
                    return  embeddings.sum(0)
                }),
                model.embed(text2).then(embeddings => {
                    return  embeddings.sum(0)
                }),
                // model.embed(text3).then(embeddings => {
                //     return  embeddings.sum(0)
                // })
            ])
        }).then(r=>{
            //const cosim=(a,b)=>tf.div(tf.div(tf.dot(a,b),tf.sqrt(tf.square(a).sum(0))),tf.sqrt(tf.square(b).sum(0)))
            this.store.dispatch(actions.TextEmbedded(r))
            // cosim(r[2],r[1]).print()
            // cosim(r[2],r[0]).print()
            
        })

    //   Promise.all(readers).then().then(r=>{
    //     this.store.dispatch(actions.ModelFitted())
    //     this.store.dispatch(actions.ModelUploaded(model))
    //     console.log('model updated.')
    //   })


    }catch(err){
      console.warn(err)
    };
  }
export default handleTextSubmit;
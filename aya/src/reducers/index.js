//Handling change of state with payload

const initial_state={
    stage:'modelUpload',
    dataDim:null,
    inputFiles: null,
    inputData:[],
    inputLabel:[],
    modelFiles:null,
    modelTrained:null,
    predData:[],
    predFiles:null,
    predictions: null,
    trained: false,
    predicted: false,
    download: null,
    modelStatus:null,
    trainingStatus:null,
    predStatus:null
};

export default (state=initial_state,action)=>{
    switch(action.type){
        case 'MENU_CLICK':
            console.log('menuclicked')
            return Object.assign({},state,{
                stage:action.pick
            }) 
        case 'FILES_SELECT':
            let updates=new Object();
            console.log('files selected')
            updates[action.key]=action.files;
            return Object.assign({},state,updates)
        case 'MODEL_UPLOAD_S1':
            return Object.assign({},state,{modelStatus:'MODEL_UPLOAD_S1'}) //placeholder
        case 'MODEL_UPLOAD_S2':
            return Object.assign({},state,{
                modelTrained:action.model,
                modelStatus:'MODEL_UPLOAD_S2'
            })
        case 'READING_FILES':
            return Object.assign({},state,{
                predStatus:'READING_FILES'
            }) //placeholder        
        case 'FILES_READ':
            return Object.assign({},state,{
                predStatus:'FILES_READ'
            }) 
        case 'MODEL_FITTING':
            return Object.assign({},state,{
                trainingStatus:'MODEL_FITTING'
            })  //placeholder
        case 'MODEL_FITTED':
            return Object.assign({},state,{
                trainingStatus:'MODEL_FITTED'
            })  //placeholder
        case 'UPLOAD_PRED':
            return Object.assign({},state,{
                predictions:action.predictions
            }) 
        default:
            return state
    }
}
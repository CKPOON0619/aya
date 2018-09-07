//Handling change of state with payload

const initial_state={
    stage:"modelUpload",
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
    download: null
};

export default (state=initial_state,action)=>{
    switch(action.type){
        case 'MENU_CLICK':
            console.log('menuclicked')
            return Object.assign({},state,{stage:action.pick}) 
        case 'FILES_SELECT':
            let updates=new Object();
            console.log('files selected')
            updates[action.key]=action.files;
            return Object.assign({},state,updates)
        case 'MODEL_UPLOAD_S1':
            return state //placeholder
        case 'MODEL_UPLOAD_S2':
            return Object.assign({},state,{modelTrained:action.model})
        case 'READING_FILES':
            return state //placeholder        
        case 'FILES_READ':
            return state //placeholder
        case 'MODEL_FITTING':
            return state //placeholder
        case 'MODEL_FITTED':
            return state //placeholder

        case 'INPUT_SELECT':
            return state
        case 'PREDICTION_SELECT':
            return state
        case 'TRAIN':
            return state
        case 'UPLOAD_PRED':
            return Object.assign({},state,{
                predictions:action.predictions
            }) 
        default:
            return state
    }
}
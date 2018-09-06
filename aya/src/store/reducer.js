import * as actionTypes from './actions'; 

const initialState = {
    stage:"modelUpload",
    inputs: null,
    dataDim:null,
    inputData:[],
    inputModel:null,
    inputModelFiles:[],
    inputLabel:[],
    modelTrained:null,
    predData:[],
    predFiles:null,
    predictions: null,
    trained: false,
    predicted: false,
    download: null
}; 

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PREDICT: 
        return {

        }; 
        case actionTypes.TRAIN:
        return {

        }; 
    }
    return state;
}; 

export default reducer;
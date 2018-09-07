//Actions creators type & payload key
//Handling data simplifications and organise proper payload
export const MenuClick=(pick)=>{
    return {
        type:'MENU_CLICK',
        pick:pick
    }
}
export const FilesSelect=(evt,key)=>{
    return {
        type:'FILES_SELECT',
        key:key,
        files:evt.target.files
    }
}
export const ModelUploading=(evt)=>{
    return {
        type:'MODEL_UPLOAD_S1'
    }
}

export const ModelUploaded=(model)=>{
    return {
        type:'MODEL_UPLOAD_S2',
        model:model
    }
}

export const ReadingFiles=()=>{
    return {
        type:'READING_FILES'
    }
}

export const FilesRead=()=>{
    return {
        type:'FILES_READ'
    }
}

export const ModelFitting=()=>{
    return {
        type:'MODEL_FITTING'
    }
}

export const ModelFitted=()=>{
    return {
        type:'MODEL_FITTED'
    }
}


export const UploadPred=(predictions)=>{
    return {
        type:'UPLOAD_PRED',
        predictions:predictions
    }
}




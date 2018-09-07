function handleModelDownload(state) {
    
    try{
        this.store.getState().modelTrained.save('downloads://Aya-knows')
    }catch(err){
        console.warn(err)
    }
}

export default handleModelDownload;
function handleModelDownload() {
    try{
        this.state.modelTrained.save('downloads://Aya-knows')
    }catch(err){
        console.warn(err)
    }
}

export default handleModelDownload;
function handleModelDownload() {
    try{
        this.state.modelTrained.save('downloads://Aya-knows')
    }catch(err){}
}

export default handleModelDownload;
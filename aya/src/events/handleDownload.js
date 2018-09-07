function handleDownload() {
    try{
        this.store.getState().predictions.data().then(X =>{ 
            var FileSaver = require('file-saver');
            var blob = new Blob([['predictions'].concat(X.join('\n')).join('\n')], {type: "text/plain;charset=utf-8"});
            FileSaver.saveAs(blob, "Predictions.csv");
    })}catch(err){
        console.warn(err)
    };
}

export default handleDownload;
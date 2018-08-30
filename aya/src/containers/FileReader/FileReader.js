import react, { Component } from 'react'; 

class FileReader extends Component {
    constructor (props) {
        super(props);
        this.state = {

        };
    }

    checkBrowserAPIFileSupport () {
        if (window.File && window.FileReader && window.FileList && window.Blob) {
            // All the File APIs are supported.
        }else {
            alert('The file APIs are not fully supported in this browser');
        }
    }

    handleFileSelect(evt) {
        let files = evt.target.files; // FileList object

        // Loop through the FileList and render image files as thumbnails.
        for (let i = 0, f; f = files[i]; i++) {
            const element = array[i];
            
            // Only process image files.
            if (!f.type.match('image.*')) {
                continue;
            }

            const reader = new FileReader();

            //Closure to capture the file information.
            reader.onload = ((theFile) => {
                return (e) => {
                    let span = document.createElement('span');
                    span.innerHTML = ['<img class="thumb" src="', e.target.result, '" title="', escape(theFile.name), '"/>'].join('');
                    document.getElementById('list').insertBefore(span, null);
                };
            })(f);

            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
    }
}

export default FileReader; 
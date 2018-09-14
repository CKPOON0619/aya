import React from "react";
import FileDisplay from "../Basic/FilesDisplay/FileDisplay";
import SubmitButton from "../Basic/Buttons/SubmitButton/SubmitButton";
function ModelUpload(props){
    console.log('here')
    console.log(props.files)
    return <div id="ModelUpload">
      <input
        id="modelUpload_dropZone"
        className="modelUpload"
        type={"file"}
        onChange={props.onChange}
        multiple
      />
      <FileDisplay files={props.files}/>
      <SubmitButton 
        id="modelUpload_Button"
        className="modelUpload"
        clicked={props.clicked}
        label="Load model"
      />
    </div>
  }

  export {ModelUpload};
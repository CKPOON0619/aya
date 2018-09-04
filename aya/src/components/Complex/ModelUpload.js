import React from "react";
import DropFile from "../Basic/Dropfile/DropFile";
import SubmitButton from "../Basic/Buttons/SubmitButton/SubmitButton";
function ModelUpload(props){
    return <div id="ModelUpload">
      <DropFile
        id="modelUpload_dropZone"
        className="modelUpload"
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}
        allowedTypes={["application/json","application/octet-stream"]}
        placeholder="Drop saved model here"
      />
      <SubmitButton 
        id="modelUpload_Button"
        className="modelUpload"
        clicked={props.clicked}
        label="Load model"
      />
    </div>
  }

  export {ModelUpload};
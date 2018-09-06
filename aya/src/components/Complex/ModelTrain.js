import React from "react";
import DropFile from "../Basic/Dropfile/DropFile";
import FileDisplay from "../Basic/FilesDisplay/FileDisplay";
import SubmitButton from "../Basic/Buttons/SubmitButton/SubmitButton";
function ModelTrain(props){
    return <div id="training">
      <input
        id="input_dropZone"
        className="training"
        type={"file"}
        accept={".txt"}
        onChange={props.onChange}
        multiple
      />
      <FileDisplay files={props.files}/>
      <SubmitButton 
        id="train_button"
        className="training"
        clicked={props.clicked} 
        label={"Train"}
      />
    </div>
  }
export {ModelTrain};  
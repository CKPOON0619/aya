import React from "react";
import DropFile from "../Basic/Dropfile/DropFile";
import SubmitButton from "../Basic/Buttons/SubmitButton/SubmitButton";
function ModelTrain(props){
    return <div id="training">
      <DropFile
        id="input_dropZone"
        className="training"
        onDrop={props.onDrop}
        onDragOver={props.onDragOver}
        allowedTypes={["text/csv","text/plain"]}
        placeholder="Drop inputs here"
      />
      <SubmitButton 
        id="train_button"
        className="training"
        clicked={props.clicked} 
        label={"Train"}
      />
    </div>
  }
export {ModelTrain};  
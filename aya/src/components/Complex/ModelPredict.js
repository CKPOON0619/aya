import React from "react";
import DropFile from "../Basic/Dropfile/DropFile";
import SubmitButton from "../Basic/Buttons/SubmitButton/SubmitButton";

function ModelPredict(props){
    return <div id="prediction">
      <input
        id="predict_dropZone"
        className="prediction"
        type={"file"}
        accept={".txt"}
        onChange={props.onChange}
        multiple
      />
      <SubmitButton 
        id="saveModel_button"
        className="prediction"
        clicked={props.clickedSaveModel}
        label="Save Model"
      />
      <SubmitButton
        id="predict_button"
        className="prediction"
        clicked={props.clickedPredict}
        label="Predict"
      />
      <SubmitButton 
        id="download_button"
        className="prediction"
        clicked={props.clickedDownload} 
        label="Download" 
      />
    </div>
  }

  export {ModelPredict};
import React from "react";
import FileInput from "../Basic/Input/FileInput";
import SubmitButton from "../Basic/Buttons/SubmitButton/SubmitButton";
function ModelUpload(props){
    return <div id="ModelUpload">
      <input
        id="modelUpload_dropZone"
        className="modelUpload"
        type={"file"}
        accept={".json,.bin"}
        onChange={props.onChange}
        multiple
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
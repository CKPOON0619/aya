import React from "react";
import FileDisplay from "../Basic/FilesDisplay/FileDisplay";
import SubmitButton from "../Basic/Buttons/SubmitButton/SubmitButton";
import LineChart from "../Basic/LineCharts/VicLineChart"
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
      <LineChart data={props.linePlot} X={'epoch'} valKeys={['loss','val_loss']} color={['red','orange']}/>
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
import React from "react";
import FileDisplay from "../Basic/FilesDisplay/FileDisplay";
import SubmitButton from "../Basic/Buttons/SubmitButton/SubmitButton";
import LineChart from "../Basic/LineCharts/ReLineChart"
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
      <LineChart data={props.linePlot} X={'epoch'} valKeys={['loss','val_loss']} color={['#f51515','#ec9e0d']}/>
      <SubmitButton 
        id="train_button"
        className="training"
        clicked={props.clicked} 
        label={"Train"}
      />
    </div>
  }
export {ModelTrain};  
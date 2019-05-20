import React from "react";
import TextField from '@material-ui/core/TextField';
import SubmitButton from "../Basic/Buttons/SubmitButton/SubmitButton";

function TextClassifier({state,onChange,onClickSubmit,onClickPredictLabel,showPredict}){
    return <div>
      <TextField
      id="standard-textarea"
      label="Text label 1"
      placeholder="Placeholder"
      value={state.textLabel1}
      onChange={onChange('textLabel1')}
      style={{ margin: 8, width:300 }}
      multiline
      className="Text_input_class_1"
      margin="normal"
      variant="outlined"
    /><TextField
      id="standard-textarea"
      label="Text label 2"
      placeholder="Placeholder"
      value={state.textLabel2}
      style={{ margin: 16, width:300 }}
      onChange={onChange('textLabel2')}
      multiline
      className="Text_input_class_2"
      margin="normal"
      variant="outlined"
    />
    <div>
      <SubmitButton 
        id="textSubmit_Button"
        className="textSubmit"
        clicked={onClickSubmit}
        label="Evaluate"
      />
    </div>
    {showPredict&&<div>
      <TextField
        id="standard-textarea"
        label="Text input"
        style={{ margin: 16, width:300 }}
        placeholder="Placeholder"
        onChange={onChange('textInput')}
        multiline
        value={state.textInput}
        className="Text_input_class_3"
        margin="normal"
        variant="outlined"
      /><SubmitButton 
        id="textLabel_Button"
        className="textLabel"
        style={{ margin: 16, width:300 }}
        clicked={onClickPredictLabel}
        label="Assign"
      /></div>}
    </div>
  }

  export {TextClassifier};
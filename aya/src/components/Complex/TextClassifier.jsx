import React from "react";
import TextField from '@material-ui/core/TextField';
import SubmitButton from "../Basic/Buttons/SubmitButton/SubmitButton";

function TextClassifier({onChange,onClickSubmit}){
    
    return <div>
      <TextField
      id="standard-textarea"
      label="Text label 1"
      placeholder="Placeholder"
      onChange={onChange('textLabel1')}
      multiline
      className="Text_input_class_1"
      margin="normal"
    /><TextField
      id="standard-textarea"
      label="Text label 2"
      placeholder="Placeholder"
      onChange={onChange('textLabel2')}
      multiline
      className="Text_input_class_2"
      margin="normal"
    /><TextField
    id="standard-textarea"
    label="Text input"
    placeholder="Placeholder"
    onChange={onChange('textInput')}
    multiline
    className="Text_input_class_3"
    margin="normal"
  /><SubmitButton 
      id="textSubmit_Button"
      className="textSubmit"
      clicked={onClickSubmit}
      label="Load model"
    />
    </div>
  }

  export {TextClassifier};
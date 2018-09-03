function handlePredictionSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({
      predFiles: evt.dataTransfer.files
    });
  }
export default handlePredictionSelect;
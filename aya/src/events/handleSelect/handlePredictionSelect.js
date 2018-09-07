function handlePredictionSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({
      predFiles: evt.target.files
    });
  }
export default handlePredictionSelect;
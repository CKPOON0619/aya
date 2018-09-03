function handleModelSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({
      inputModel: evt.dataTransfer.files
    });
  }
export default handleModelSelect;
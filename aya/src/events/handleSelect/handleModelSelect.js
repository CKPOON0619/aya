function handleModelSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({
      modelFiles: evt.target.files
    });
  }
export default handleModelSelect;
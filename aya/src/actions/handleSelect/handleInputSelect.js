function handleInputSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({
      inputs: evt.dataTransfer.files
    });
  }
export default handleInputSelect;
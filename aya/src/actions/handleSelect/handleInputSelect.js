function handleInputSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    this.setState({
      inputFiles: evt.target.files
    });
  }
export default handleInputSelect;
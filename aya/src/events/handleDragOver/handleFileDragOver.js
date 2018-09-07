function handleFileDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = "copy"; // Explicitly show this is a copy.
  }

export default handleFileDragOver;
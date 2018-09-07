import * as actions from "./actions/index";
function handleInputSelect(evt) {
    this.store.dispatch(actions.FilesSelect(evt,'inputFiles'))
  }
export default handleInputSelect;
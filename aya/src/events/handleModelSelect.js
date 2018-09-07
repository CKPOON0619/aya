import * as actions from "./actions/index"
//Handling of dispatches
function handleModelSelect(evt) {
  this.store.dispatch(actions.FilesSelect(evt,'modelFiles'));
};
export default handleModelSelect;
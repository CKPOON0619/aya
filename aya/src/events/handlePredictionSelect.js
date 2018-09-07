
import * as actions from "./actions/index";
function handlePredictionSelect(evt) {
  this.store.dispatch(actions.FilesSelect(evt,'predFiles'));
}
export default handlePredictionSelect;
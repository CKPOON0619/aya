import * as actions from "./actions/index"
function handleMenuClick(pick){
  if(typeof pick==="string") this.store.dispatch(actions.MenuClick(pick));;
};

export default handleMenuClick;
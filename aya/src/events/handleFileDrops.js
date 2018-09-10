import * as actions from "./actions/index";
function handleFileDrops(evt,key,allowedTypes,limit) {
    console.log('i see u dropped!!!!!!!!')
    this.store.dispatch(actions.FileDrops(evt,key,allowedTypes,limit))
  }
export default handleFileDrops;
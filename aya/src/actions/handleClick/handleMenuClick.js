function handleMenuClick(pick){
  if(typeof pick==="string") this.setState({ stage: pick });
};

export default handleMenuClick;
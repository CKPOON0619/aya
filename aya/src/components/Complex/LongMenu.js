import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
  'modelUpload',
  'modelTrain',
  'modelPredict'
];

const ITEM_HEIGHT = 48;

class LongMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            anchorEl: null,
            pick:props.pick
        }  
    }
  

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
    console.log('click')
    console.log(event.currentTarget)
    console.log(this.state)
  };

  handleClose = (pick) => {
    this.setState({ anchorEl: null });
    this.state.pick(pick)
    console.log('close')
    console.log(this.state)
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          {options.map(option => (
            <MenuItem key={option} selected={option === 'modelUpload'} onClick={()=>{this.handleClose(option)}}>
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

export default LongMenu;
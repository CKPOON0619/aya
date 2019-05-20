import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const options = [
  'modelUpload',
  'modelTrain',
  'modelPredict',
  'textClassifier'
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
  };

  handleClose = (pick) => {
    this.setState({ anchorEl: null });
    this.state.pick(pick)
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div id={this.props.id}>
        <IconButton
          aria-label="More"
          aria-owns={open ? 'long-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
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
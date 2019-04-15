import React, { Component } from './node_modules/react'
import PropTypes from './node_modules/prop-types';
import { withStyles } from './node_modules/@material-ui/core/styles';
import SwipeableDrawer from './node_modules/@material-ui/core/SwipeableDrawer';
import Button from './node_modules/@material-ui/core/Button';
import List from './node_modules/@material-ui/core/List';
import Divider from './node_modules/@material-ui/core/Divider';
import ListItem from './node_modules/@material-ui/core/ListItem';
import ListItemIcon from './node_modules/@material-ui/core/ListItemIcon';
import ListItemText from './node_modules/@material-ui/core/ListItemText';
import InboxIcon from './node_modules/@material-ui/icons/MoveToInbox';
import MailIcon from './node_modules/@material-ui/icons/Mail';


const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
};

class Drawer extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      left: false,
      top: false
    }

    
  }
  static propTypes = {
    classes: PropTypes.object.isRequired,
  };
  

  

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    })
  }

  render() {

    const {classes} = this.props

    const sideList = (
      <div className={ classes.list }>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
            
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((item, index) => (
            <ListItem button key={index}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={item} />
            </ListItem>
            
          ))}
        </List>
      </div>
    )

    return (
      <div>
        <Button onClick={this.toggleDrawer('left', true).bind(this)}>Open Left</Button>
        <Button onClick={this.toggleDrawer('top', true).bind(this)}>Open Right</Button>

        <SwipeableDrawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
          onOpen={this.toggleDrawer('left', true)}
        >
        <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
        <SwipeableDrawer
          anchor="top"
          open={this.state.top}
          onClose={this.toggleDrawer('top', false)}
          onOpen={this.toggleDrawer('top', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('top', false)}
            onKeyDown={this.toggleDrawer('top', false)}
          >
            {sideList}
          </div>
        </SwipeableDrawer>
      </div>
    )
  }
}

export default withStyles(styles)(Drawer);

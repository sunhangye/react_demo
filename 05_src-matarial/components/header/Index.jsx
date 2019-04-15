import React from './node_modules/react'
// import PropTypes from 'prop-types';
import AppBar from './node_modules/@material-ui/core/AppBar';
import Toolbar from './node_modules/@material-ui/core/Toolbar';
import IconButton from './node_modules/@material-ui/core/IconButton';
import Typography from './node_modules/@material-ui/core/Typography';
import InputBase from './node_modules/@material-ui/core/InputBase';
import { fade } from './node_modules/@material-ui/core/styles/colorManipulator';
import { withStyles } from './node_modules/@material-ui/core/styles';
import MenuIcon from './node_modules/@material-ui/icons/Menu';
import SearchIcon from './node_modules/@material-ui/icons/Search';

import Drawer from './Drawer'
 
const style = (theme) => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
})

function Index(props) {

  const { classes } = props;
  return (
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer">
        <MenuIcon />
        </IconButton>
        <Typography className={classes.title} variant="h6" color="inherit" noWrap>
          Material-UI
        </Typography>
        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
          />
        </div>
      </Toolbar>
      
    </AppBar>
    <Drawer />
  </div>
  )

}

export default withStyles(style)(Index)
// return (Component) => (props) => (<Component {...props} classes={classes} />);

/**
 
 return function (Component) {
   return function (props) {
     return ( < Component {
         ...props
       }
       classes = {
         classes
       } > );
   };
 };
 */


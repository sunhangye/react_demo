import React, { Component } from './node_modules/react'
import AppBar from './components/header/Index'
import SimpleBottomNavigation from './components/bottom-navigation/BottomNavigation';
// import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
export default class App extends Component {
  render() {
    return (
        <div>
          <AppBar Msg={"sunhangye"} />
          <SimpleBottomNavigation />
        </div>
        
    )
  }
}

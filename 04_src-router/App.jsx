import React, { Component } from './node_modules/react'
import { Route, Switch, Redirect } from './node_modules/react-router-dom'

import About from './views/about'
import Home from './views/home'
import MyNavLink from './components/my-nav-link'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-offset-2 col-xs-8">
            <div className="page-header"><h2>React Router Demo</h2></div>
          </div>
        </div>

        <div className="row">
          <div className="col-xs-2 col-xs-offset-2">
            <MyNavLink to='./about'>To About</MyNavLink>
            <MyNavLink to='./home'>To Home</MyNavLink>

          </div>
          <div className="col-xs-6">
            <div className="panel">
              <div className="panel-body">
                <Switch>
                  <Route path='/about' component={About}/>
                  <Route path='/home' component={Home}/>
                  <Redirect to='/about'/>
                </Switch>
              </div>
            </div>
          </div>

        </div>
      </div>
    )
  }
}
import React, { Component } from './node_modules/react'

import { Route, Switch, Redirect } from './node_modules/react-router-dom'

import MyNavLink from '../components/my-nav-link'
import Message from './message';
import News from './news';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home of your everything</h2>
        <div>
          <ul className="nav nav-tabs">
            <li>
              <MyNavLink to="/home/news">新闻</MyNavLink>
              <MyNavLink to="/home/message">信息</MyNavLink>
            </li>
          </ul>

          <Switch>
            <Route path="/home/news" component={News}></Route>
            <Route path="/home/message" component={Message}></Route>
            <Redirect to="/home/news"></Redirect>
          </Switch>
        </div>
      </div>

    )
  }
}

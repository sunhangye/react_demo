import React, { Component } from './node_modules/react'
import { Route, Link } from './node_modules/react-router-dom'

import MessageDetail from './message-detail'

export default class Message extends Component {

  state = {
    messages: []
  }

  pushShow = (id) => {
    this.props.history.push(`/home/message/${id}`)
  }

  replaceShow = (id) => {
    this.props.history.replace(`/home/message/${id}`)
  }
  goBack = () => {
    this.props.history.goBack()
  }
  componentDidMount() {
    setTimeout(() => {
      const messages = [
        {id: 1, title: 'message001-title'},
        {id: 3, title: 'message003-title'},
        {id: 5, title: 'message005-title'}
      ]

      
      this.setState({
        messages
      });
    }, 1000);

    
  }
  
  render() {
    const {messages} = this.state
    
    return (
      <div>
        <ul>
          {
            messages.map((item) => (
              <li key={item.id}>
                <Link to={`/home/message/${item.id}`}>{item.title}</Link>
                <br/>
                <button onClick={() => this.pushShow(item.id)}>push 查看</button>
                <br/>
                <button onClick={() => this.replaceShow(item.id)}>replace 查看</button>
              </li>
            ))
          }
        </ul>

        <button onClick={this.goBack}>回退</button>
        <hr/>
        <Route path='/home/message/:id' component={MessageDetail}/>
      </div>
    )
  }
}

import React, { Component } from './node_modules/react'

const allDetails = [
  {id: 1, title: 'message001', content: 'content001'},
  {id: 3, title: 'message003', content: 'content003'},
  {id: 5, title: 'message005', content: 'content005'}
]

export default class MessageDtail extends Component {
  
  render() {
    const id = this.props.match.params.id * 1
    console.log(this.props);
    
    const detail = allDetails.find((item, index) => item.id === id)
    
    
    return (
      <div>
        <p>ID: {id}</p>
        <p>Title: {detail.title}</p>
        <p>Content: {detail.content}</p>
      </div>
    )
  }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './item.css'
class Item extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComment: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
  }
  
  clickDelete = () => {
    if (window.confirm('确定要删除吗')) {
      this.props.deleteComment(this.props.index)
    }
  }
  render() {
    const { username, content} = this.props.comment
    return ( 
      <li className="list-group-item">
        <div className="handle">
          <div onClick={this.clickDelete}>删除</div>
        </div>
        <p className="user"><span >{username}</span><span>说:</span></p>
        <p className="centent">{content}</p>
      </li>
     );
  }
}
 
export default Item;
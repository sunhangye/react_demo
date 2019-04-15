import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Item from '../item/item'

class List extends Component {
  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComment: PropTypes.func.isRequired
  }
  
  render() { 
    const { comments, deleteComment } = this.props

    const display = this.props.comments.length > 0 ? 'display:none' : 'display:block'
    return ( 
      <div className="col-md-8">
        <h3 className="replay">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论</h2>
        <ul>
          {
            comments.map((item, index) => 
              <Item key={index} comment={item} index={index} deleteComment={deleteComment} />
            )
          }
        </ul>
      </div>
     );
  }
}
 
export default List;
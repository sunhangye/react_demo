import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Add extends Component {

  static propTypes = {
    addComment: PropTypes.func.isRequired
  }
  clickSubmit = () => {
    const username = this.refs.username.value.trim()
    const content = this.refs.content.value.trim()

    if (!username || !content) {
      alert('必须输入')
      return
    }

    const comment = {
      username,
      content
    }

    this.props.addComment(comment)

    this.refs.username.value = ''
    this.refs.content.value = ''
  }
  state = {  }
  render() { 
    return ( 
      <div className="col-md-4">
        <form className="form-horizontal">
          <div className="form-group">
            <label htmlFor="username">用户名</label>
            <input id="username" type="text" className="form-control" placeholder="用户名" ref="username"/>
          </div>
          <div className="form-group">
            <label htmlFor="content">评论内容</label>
            <textarea id="content" className="form-control" rows="6" placeholder="评论内容" ref='content'></textarea>
          </div>
          <div className="form-group">
            <div className="col-sm-offset-2 col-sm-10">
              <button type="button" className="btn btn-default pull-right" onClick={this.clickSubmit}>提交</button>
            </div>
          </div>
        </form>

      </div>
     );
  }
}
 
export default Add;
import React, { Component } from 'react'
import Pubsub from 'pubsub-js';
import PropTypes from 'prop-types';

import axios from 'axios'

export default class Main extends Component {

  static propTypes = {
    searchName: PropTypes.string.isRequired,
  }

  state = {
    firstView: true, // 是否显示第一个初始界面
    loading: false, // 是否正在请求中
    errorMsg: '', // 请求出错的提示信息
    users: [] // 需要显示的用户列表
  }
  
  getUserList(users) {
    return (
      <div className="row">
        {
          users.map((user, index) => (
            <div className="card" key={index}>
              <a href={user.url} target="_blank" rel="noopener noreferrer">
                <img src={user.avatar_url} style={{width: 100}} alt="avatar"/>
              </a>
              <p className="card-text">{user.name}</p>
            </div>
          ))
        }
      </div>
    )
  }
   
  componentDidMount() {
    Pubsub.subscribe('search', async (msg, searchName) => {
      console.log('msg :', msg);
      this.setState({
        firstView: false,
        loading: true
      });

      const url = `https://api.github.com/search/users?q=${searchName}`
      try {
        const response = await axios.get(url)
        const result = response.data
        const users = result.items.map(item => ({
          name: item.login,
          avatar_url: item.avatar_url,
          url: item.html_url
        }))

        this.setState({
          users,
          loading: false
        });
      }
      catch(err) {
        this.setState({
          loading: false,
          errorMsg: err
        });
        throw new Error(err)
        
      }
      finally {
        console.log('请求完成')
      }
      })
      

  }
  render() {
    const { firstView, loading, errorMsg, users } = this.state
    if (firstView) {
      return <h2>请输入关键字搜索 {this.props.searchName}</h2>
    } else if (loading) {
      return <h2>正在请求中</h2>
    } else if (errorMsg) {
      return <h2 style={{color: 'red'}}>{{errorMsg}}</h2>
    } else {
      return this.getUserList(users)
      }
    }
    
  }


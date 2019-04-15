import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class search extends Component {
  static proptype = {
    setSearchName: PropTypes.func.isRequired,
  }
  search = () => {
    const searchName = this.refs.searchName.value.trim()
    if (searchName) {
      this.props.setSearchName(searchName)
      this.refs.searchName.value = ''
    }
  }
  
  render() {
    return (
      <div className="jumbotron">
        <h3 className="jumbotron-heading">Search Github Users</h3>
        <div>
          <input type="text" placeholder="enter the name you search" ref="searchName" />
          <button onClick={this.search}>Search</button>
        </div>
      </div>
    )
  }
}

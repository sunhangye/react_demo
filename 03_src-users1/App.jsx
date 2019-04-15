import React, { Component } from 'react';
import Search from './components/search'
import Main from './components/main'


class App extends Component {
  state = { 
    searchName: ''
   }

   setSearchName = (searchName) => {
     this.setState({
       searchName
     })
   }
  render() {
    const { searchName } = this.state
    return (
      <div className="container">
        <Search setSearchName={this.setSearchName}/>
        <Main searchName={searchName} />
      </div>
    );
  }
}
 
export default App;
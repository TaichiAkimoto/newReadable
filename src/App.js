import React, { Component } from 'react'
import './App.css'

import { Route } from 'react-router-dom'
import Posts from './components/Posts'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Posts />
        )}/>
      </div>
    );
  }
}

export default App;

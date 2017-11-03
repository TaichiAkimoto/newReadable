import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getPosts,
  getCategory,
} from './actions/Posts'
import './App.css'

import { Route } from 'react-router-dom'
import Posts from './components/Posts'

class App extends Component {
  initializeApp() {
    const { dispatch } = this.props
    dispatch(getPosts())
    dispatch(getCategory())
  }
  componentDidMount() {
    this.initializeApp()
  }
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Posts />
        )}/>
        <Route exact path='/:category' render={() => (
          <Posts />
        )}/>
      </div>
    );
  }
}

export default connect()(App)

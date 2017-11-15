import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Posts from './components/Posts'
import CategoryPost from './components/CategoryPost'
import PostDetail from './components/PostDetail'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => (
          <Posts />
        )}/>
        <Route exact path='/:category' render={({ match }) => (
          <CategoryPost route={match}/>
        )}/>
        <Route exact path='/detail/:id' render={() => (
          <PostDetail />
        )}/>
      </div>
    );
  }
}

export default App

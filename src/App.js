import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Posts from './components/Posts'
import CategoryPost from './components/CategoryPost'
import PostDetail from './components/PostDetail'
import EditView from './components/EditView'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={({ history }) => (
          <Posts history={history}/>
        )}/>
        <Route path='/:category' render={({ match, history }) => (
          <CategoryPost route={match} history={history}/>
        )}/>
        <Route path='/detail/:id' render={() => (
          <PostDetail />
        )}/>
        <Route path='/edit/:id' render={() => (
          <EditView />
        )}/>
      </div>
    );
  }
}

export default App

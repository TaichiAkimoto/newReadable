import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getPosts,
} from '../actions/Posts'

class Posts extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getPosts())
  }
  render() {
    const { posts } = this.props
    return (
      <div className='App'>
        <ul>
          {posts.map(post => (
            <div className='Posts' key={post.id}>
              <li>
                title: {post.title}<br/>
                body: {post.body}<br/>
                author: {post.author}<br/>
                voteScore: {post.voteScore}<br/>
                created: {post.timestamp}<br/>
                category: {post.category}<br/>
              </li>
            </div>
          ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts: state.Posts,
  }
}
export default connect(
  mapStateToProps,
)(Posts)

import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  getPosts,
} from '../actions/Posts'
import './Posts.css'

class Posts extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(getPosts())
  }
  render() {
    const { posts } = this.props
    return (
      <div className='Posts'>
        {posts.map(post => (
          <div className='post-wrapper'key={post.id}>
              <div className='post-title'>title: {post.title}</div>
              <div className='post-body'>body: {post.body}</div>
              <div className='post-author'>author: {post.author}</div>
              <div className='post-vote'>voteScore: {post.voteScore}</div>
              <div className='post-created'>created: {post.timestamp}</div>
              <div className='post-category'>category: {post.category}</div>
          </div>
        ))}
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

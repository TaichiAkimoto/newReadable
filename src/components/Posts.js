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
              <p className='post-title'>title-> {post.title}</p>
              <p className='post-body'>body-> {post.body}</p>
              <p className='post-author'>author-> {post.author}</p>
              <p className='post-vote'>voteScore-> {post.voteScore}</p>
              <p className='post-created'>created-> {post.timestamp}</p>
              <p className='post-category'>category-> {post.category}</p>
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

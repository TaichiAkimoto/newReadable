import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Posts.css'

class Posts extends Component {
  render() {
    const { posts_r, category, route } = this.props
    let posts = posts_r
    if(route.params.category !== undefined) {
      let current_category = route.params.category
      posts = posts_r.filter((post) => post.category === current_category)
    }
    return (
      <div className='Flex'>
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
        <div className='Category'>
          <Link to={'/'} className='Link'>Default</Link>
          {category.map(each => (
            <Link key={each.name} to={'/' + each.name} className='Link'>
              {each.name}
            </Link>
          ))}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts_r: state.Posts,
    category: state.Category,
  }
}
export default connect(
  mapStateToProps,
)(Posts)

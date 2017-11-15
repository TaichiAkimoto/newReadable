import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class CategoryPost extends Component {
  render() {
    const { posts_org, category, route } = this.props
    let current_category = route.params.category
    let posts = posts_org.filter((post) => post.category === current_category)
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
        <Link to={'/detail/1'}>go to test</Link>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    posts_org: state.Posts,
    category: state.Category,
  }
}
export default connect(
  mapStateToProps,
)(CategoryPost)

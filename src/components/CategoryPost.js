import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './Posts.css'

var sortBy = require('sort-by')

class CategoryPost extends Component {
  state = {
    order: "voteScore"
  }
  render() {
    const { posts_org, category, route, history } = this.props
    const { order } = this.state
    let current_category = route.params.category
    let posts = posts_org.filter((post) => post.category === current_category)
    posts.sort(sortBy(order));
    return (
      <div className='Flex'>
        <div className='Posts'>
          {posts.length === 0 ?
            <div style={{marginTop:'50px'}}>Data is empty !</div> :
            posts.map(post => (
            <div className='post-wrapper' key={post.id}
              onClick={() => history.push('/detail/' + post.id)}>
              <p className='post-title'>title-> {post.title}</p>
              <p className='post-body'>body-> {post.body}</p>
              <p className='post-author'>author-> {post.author}</p>
              <p className='post-vote'>voteScore-> {post.voteScore}</p>
              <p className='post-created'>created-> {post.timestamp}</p>
              <p className='post-category'>category-> {post.category}</p>
            </div>
          ))}
        </div>
        <div className='not-post'>
          <div className='Category'>
            <Link to={'/'} className='Link'>Default</Link>
            {category.map(each => (
              <Link key={each.name} to={'/' + each.name}
                className={'Link ' + (current_category===each.name ? 'selected' : 'deselected')}>
                {each.name}
              </Link>
            ))}
          </div>
          <div className='Sorts'>
            <button className={'sort-button ' + (order==='voteScore' ? 'selected' : 'deselected')}
              onClick={() => this.setState({order: 'voteScore'})}
            >Sort by Vote !</button>
            <button className={'sort-button ' + (order==='voteScore' ? 'deselected' : 'selected')}
              onClick={() => this.setState({order: 'timestamp'})}
            >Sort by Date !</button>
          </div>
          <Link className='new-post' to={'/edit/' + 0}>
            Create a New Post
          </Link>
        </div>
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

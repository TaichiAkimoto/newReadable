import * as API from '../utils/API'

export const GET_POSTS = 'GET_POSTS'
export const GET_CATEGORY = 'GET_CATEGORY'

// mk standds for make
const mkGetPosts = (posts) => ({
  type: GET_POSTS,
  posts,
})

export const getPosts = () => dispatch => (
  API.getPosts()
    .then(posts => dispatch(mkGetPosts(posts)))
)

const mkGetCategory = (category) => ({
  type: GET_CATEGORY,
  category
})

export const getCategory = () => dispatch => (
  API.getCategory()
    .then(category => dispatch(mkGetCategory(category)))
)

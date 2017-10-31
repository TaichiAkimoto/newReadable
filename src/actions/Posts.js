import * as API from '../utils/API'

export const GET_POSTS = 'GET_POSTS'

// mk standds for make
const mkGetPosts = (posts) => ({
  type: GET_POSTS,
  posts,
})

export const getPosts = () => dispatch => (
  API.getPosts()
    .then(posts => dispatch(mkGetPosts(posts)))
)

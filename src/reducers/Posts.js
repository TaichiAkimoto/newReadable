import {
  GET_POSTS,
} from '../actions/Posts'

export const Posts = (state=[], actions) => {
  switch (actions.type) {
    case GET_POSTS:
      return [
        ...state,
        ...actions.posts
      ]
    default:
      return state
  }
}

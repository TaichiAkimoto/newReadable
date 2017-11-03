import {
  GET_POSTS,
  GET_CATEGORY,
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

export const Category = (state=[], actions) => {
  switch (actions.type) {
    case GET_CATEGORY:
      return [
        ...state,
        ...actions.category
      ]
    default:
      return state
  }
}

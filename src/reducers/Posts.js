import {
  GET_POSTS,
  GET_CATEGORY,
} from '../actions/Posts'

export const Posts = (state=[], actions) => {
  switch (actions.type) {
    case GET_POSTS:
      return [
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
        ...actions.category
      ]
    default:
      return state
  }
}

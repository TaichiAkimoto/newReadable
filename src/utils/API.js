const uri = "http://localhost:5001"
let authToken = createAuthToken()
const headers = {
  'Authorization': authToken
}

export const getPosts = () =>
  fetch(`${uri}/posts`, { headers })
    .then(posts => posts.json())

function createAuthToken() {
  let authToken = localStorage.authToken
  if (!authToken)
    authToken = localStorage.authToken = Math.random().toString(36).substr(-8)
  return authToken
}

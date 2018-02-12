const Api_Url = 'http://localhost:3001/api'

export const addDraftPosts = drafts => {
   return {
      type: "ADD_DRAFT_POSTS",
      drafts: drafts
   }
}

export const getDraftPosts = token => {
   return dispatch => {
      return fetch(`${Api_Url}/posts?token=${token}`)
      .then(response => response.json())
      .then(drafts => dispatch(addDraftPosts(drafts)))
   }
}
import { convertFromRaw, EditorState } from 'draft-js';
import { markdownToDraft} from 'markdown-draft-js';

export const addPublishedPost = post => ({
      type: 'ADD_PUBLISHED_POST',
      post: post
})

export const getPublishedPosts = login => {
   const githubURL = `http://api.github.com/repos/${login}/${login}.github.io/`
   
   return dispatch => {
      return fetch(`${githubURL}contents/_posts`, {
         headers: {
            "Accept": "application/vnd.github.v3+json"
         }
      })
      .then(response => response.json())
      .then(postData => Promise.all(postData.map(
         post => fetch(`https://raw.githubusercontent.com/${login}/${login}.github.io/master/${post.path}`, {
            method: 'get', 
            mode: "cors", 
            headers: { "accept": "application/vnd.github.VERSION.raw" }
         })
         .then(resp => resp.text())
         .then(post => dispatch(addPublishedPost(post)))
      )))
   }
}

export const displayPublishedPost = markdown => {
   const rawData = markdownToDraft(markdown)
   const contentState = convertFromRaw(rawData);
   return {
      type: "UPDATE_EDITOR_STATE",
      editorState: EditorState.createWithContent(contentState)
   }
}
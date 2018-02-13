import { convertFromRaw, EditorState } from 'draft-js';

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

export const saveEditorState = editorState => {
   return {
      type: "UPDATE_EDITOR_STATE",
      editorState: editorState
   }
}

export const loadDraftPost = rawData => {
   const contentState = convertFromRaw(rawData);
   return {
      type: "UPDATE_EDITOR_STATE",
      editorState: EditorState.createWithContent(contentState)
   }
}

export const setCurrentDraft = props => {
   return {
      type: "SET_CURRENT_DRAFT",
      props
   }
}
import { EditorState } from 'draft-js';

const postsReducer = (state = {
   posts:[], 
   drafts:[],
   currentDraft: {
      id: null,
      isSaved: false
   },
   editorState: EditorState.createEmpty()
}, action) => {
   switch(action.type) {
      case 'ADD_PUBLISHED_POST': 
         return Object.assign({}, state, {posts: state.posts.concat(action.post)})
      case 'ADD_DRAFT_POSTS':
         return Object.assign({}, state, {drafts: state.drafts.concat(action.drafts)})
      case 'UPDATE_EDITOR_STATE':
         return Object.assign({}, state, {editorState: action.editorState})
      case 'SET_CURRENT_DRAFT':
         return Object.assign({}, state, {currentDraft: action.props})
      case 'RESET_POSTS':
         return Object.assign({}, state, {posts: []})
      case 'RESET_DRAFTS':
         return Object.assign({}, state, {drafts: []})
      case 'CREATE_NEW_DRAFT':
         return Object.assign({}, state, {editorState: EditorState.createEmpty()})
      default: 
         return state;
   }
}

export default postsReducer
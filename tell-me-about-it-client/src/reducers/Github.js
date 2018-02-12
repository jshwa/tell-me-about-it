import { EditorState } from 'draft-js';

const githubReducer = (state = {tab:"Sign In", posts:[], drafts:[], editorState: EditorState.createEmpty()}, action) => {
   switch(action.type) {
      case 'CURRENT_TAB':
         return Object.assign({}, state, {tab: action.tab})
      case 'ADD_PUBLISHED_POST': 
         return Object.assign({}, state, {posts: state.posts.concat(action.post)})
      case 'ADD_DRAFT_POSTS':
         return Object.assign({}, state, {drafts: state.drafts.concat(action.drafts)})
      case 'UPDATE_EDITOR_STATE':
         return Object.assign({}, state, {editorState: action.editorState})
      default: 
         return state;
   }
}

export default githubReducer
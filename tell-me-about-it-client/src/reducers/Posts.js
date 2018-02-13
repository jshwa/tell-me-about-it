import { EditorState } from 'draft-js';

const postsReducer = (state = {
   tab:"Sign In", 
   posts:[], 
   drafts:[], 
   isSaved: false,
   editorState: EditorState.createEmpty()
}, action) => {
   switch(action.type) {
      case 'CURRENT_TAB':
         return Object.assign({}, state, {tab: action.tab})
      case 'ADD_PUBLISHED_POST': 
         return Object.assign({}, state, {posts: state.posts.concat(action.post)})
      case 'ADD_DRAFT_POSTS':
         return Object.assign({}, state, {drafts: state.drafts.concat(action.drafts)})
      case 'UPDATE_EDITOR_STATE':
         return Object.assign({}, state, {editorState: action.editorState})
      case 'UPDATE_SAVED_STATUS':
         return Object.assign({}, state, {isSaved: action.isSaved})
      default: 
         return state;
   }
}

export default postsReducer
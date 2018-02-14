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
      case 'ADD_DRAFT':
         const index = state.drafts.findIndex(draft => draft.id === action.draft.id)
         return Object.assign({}, state, {
            drafts: 
               state.drafts.slice(0,index)
               .concat(action.draft)
               .concat(state.drafts.slice(index+1))
            })
      default: 
         return state;
   }
}

export default postsReducer
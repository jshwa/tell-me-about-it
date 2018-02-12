const githubReducer = (state = {tab:"Sign In", posts:[]}, action) => {
   switch(action.type) {
      case 'CURRENT_TAB':
         return Object.assign({}, state, {tab: action.tab})
      case 'ADD_PUBLISHED_POST': 
         return Object.assign({}, state, {posts: state.posts.concat(action.post)})
      default: 
         return state;
   }
}

export default githubReducer
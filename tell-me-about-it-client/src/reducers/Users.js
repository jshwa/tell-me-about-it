const userReducer = (state = {token: null, login: null, oauth: null, setBgImg: null, bgImgs:[], loggedIn: false}, action) => {
   switch(action.type) {
      case "LOGIN_USER":
         return Object.assign({}, state, action.userData, {loggedIn: true});
      case "SET_LOGGED_IN":
         return Object.assign({}, state, {loggedIn : action.loggedIn});
      case "LOGOUT_USER":
         return Object.assign({}, state, {token: null, login: null, oauth: null, loggedIn: false});
      case "SET_BG": 
         return Object.assign({}, state, action.setBgImg)
      case "ADD_BG":
         console.log("in reducer")
         console.log(action.newBg)
         return Object.assign({}, state, {bgImgs: [action.newBg].concat(state.bgImgs)});
      default:
         return state;
    }
}

export default userReducer
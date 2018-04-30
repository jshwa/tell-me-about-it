const userReducer = (state = {token: null, login: null, oauth: null, bgImg: null, loggedIn: false}, action) => {
   switch(action.type) {
      case "LOGIN_USER":
         return Object.assign({}, state, action.userData, {loggedIn: true});
      case "SET_LOGGED_IN":
         return Object.assign({}, state, {loggedIn : action.loggedIn});
      case "LOGOUT_USER":
         return Object.assign({}, state, {token: null, login: null, oauth: null, loggedIn: false});
      case "SET_BG":
         return Object.assign({}, state, action.bgImg);
      default:
         return state;
    }
}

export default userReducer
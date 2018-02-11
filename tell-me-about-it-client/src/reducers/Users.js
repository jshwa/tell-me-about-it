const userReducer = (state = [
   { login: null,
     token: null }
], action) => {
   switch(action.type) {
      case "LOGIN_USER":
         return Object.assign({}, state, action.userData)
      default:
         return state;
    }
}

export default userReducer
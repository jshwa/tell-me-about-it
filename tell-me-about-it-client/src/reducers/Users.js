const userReducer = (state = {token: null, login: null}, action) => {
   switch(action.type) {
      case "LOGIN_USER":
         return action.userData
      default:
         return state;
    }
}

export default userReducer
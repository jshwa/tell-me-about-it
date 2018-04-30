export const loginUser = userData => {
   return {
      type: 'LOGIN_USER',
      userData
   }
}

export const setLoggedIn = bool => {
   return {
      type: "SET_LOGGED_IN",
      loggedIn: bool
   }
}

export const logoutUser = () => ({
   type: "LOGOUT_USER"
})

export const setBg = index => ({
   type: "SET_BG",
   setBgImg: index
})

export const addBg = newBg => ({
   type: "ADD_BG",
   newBg
})
export const loginUser = userData => ({
   type: 'LOGIN_USER',
   userData
})

export const setLoggedIn = bool => ({
   type: "SET_LOGGED_IN",
   loggedIn: bool
})

export const signOutUser = () => ({
   type: "SIGN_OUT_USER"
})
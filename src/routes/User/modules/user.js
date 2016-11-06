// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOGIN'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const SIGNUP = 'SIGNUP'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAIL = 'SIGNUP_FAIL'

// ------------------------------------
// Actions
// ------------------------------------
export function signUp (name, email, password, phone, address) {
  return {
    types    : [SIGNUP, SIGNUP_SUCCESS, SIGNUP_FAIL],
    payload : {
      name,
      email,
      password
    }
  }
}

export function login (data) {
  return {
    typeS    : [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    payload : {
      email: data.email,
      password: data.password
    }
  }
}

export const actions = {
  login,
  signUp
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SIGNUP] : (state, action) => ({ ...state, creatingAccount: true }),
  [SIGNUP_SUCCESS]: (state, action) => ({ ...state, creatingAccount: false, createdAccount: true }),
  [SIGNUP_FAIL]: (state, action) => ({ ...state, creatingAccount: false, createdAccount: false }),
  [LOGIN]: (state, action) => ({ ...state, loggingIn: true }),
  [LOGIN_SUCCESS]: (state, action) => ({ ...state, loggingIn: false, loggedIn: true }),
  [LOGIN_FAIL]: (state, action) => ({ ...state, loggingIn: false, loggedIn: false })
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  loggedIn: false,
  loggingIn: false,
  creatingAccount: false,
  createdAccount: false
}

export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

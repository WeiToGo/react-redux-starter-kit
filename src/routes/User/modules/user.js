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
export const signUp = (name, email, password, phone, address) => {
  return {
    type    : [SIGNUP],
    payload : {
      name,
      email,
      password
    }
  }
}

export const logIn = (email, password) => {
  return {
    type    : [LOGIN],
    payload : {
      email,
      password
    }
  }
}

export const actions = {
  logIn,
  signUp
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SIGNUP] : (state, action) => {
    return ({ ...state, creatingAccount: true })
  },
  [SIGNUP_SUCCESS]: (state, action) => {
    return ({ ...state, creatingAccount: false, createdAccount: true })
  },
  [SIGNUP_FAIL]: (state, action) => {
    return ({ ...state, creatingAccount: false, createdAccount: false })
  },
  [LOGIN]: (state, action) => {
    return ({ ...state, loggingIn: true })
  },
  [LOGIN_SUCCESS]: (state, action) => {
    return ({ ...state, loggingIn: false, loggedIn: true })
  },
  [LOGIN_FAIL]: (state, action) => {
    return ({ ...state, loggingIn: false, loggedIn: false })
  }
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

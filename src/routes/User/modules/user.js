// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN = 'LOGIN'
export const SIGNUP = 'SIGNUP'

// ------------------------------------
// Actions
// ------------------------------------
export function signUp (name, email, password) {
  return {
    type    : SIGNUP,
    payload : {
      name,
      email,
      password
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
  [SIGNUP] : (state, action) => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {}
export default function userrReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}

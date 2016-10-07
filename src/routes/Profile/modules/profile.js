// ------------------------------------
// Constants
// ------------------------------------
export const POST_MESSAGE = 'POST_MESSAGE';

// ------------------------------------
// Actions
// ------------------------------------
export function postMessage(message) {
  return {
    type: POST_MESSAGE,
    payload: message,
  }
}


export const actions = {
  postMessage
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [];
export default function profileReducer (state = initialState, action) {
  if (action.type === POST_MESSAGE) {
    state.push(action.payload);
  }
  // the state here contains the message user posted, but somehow the Profile component
  // does not render after the state change.
  console.log('profile state ', state);
  return state;
}

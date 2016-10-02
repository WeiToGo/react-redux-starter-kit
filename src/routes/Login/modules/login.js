// ------------------------------------
// Constants
// ------------------------------------
export const UPLOAD_IMAGE = 'UPLOAD_IMAGE'

// ------------------------------------
// Actions
// ------------------------------------
export function uploadImage (imageUrl) {
  return {
    type: UPLOAD_IMAGE,
    imageUrl,
  }
}


export const actions = {
  uploadImage
}


// ------------------------------------
// Reducer
// ------------------------------------
const initialState = null;
export default function loginReducer (state = initialState, action) {
  return action.type === UPLOAD_IMAGE
    ? action.imageUrl
    : state
}

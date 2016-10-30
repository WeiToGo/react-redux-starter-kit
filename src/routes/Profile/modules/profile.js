export const ADD_POST = 'ADD_POST';

let postId = 0;
export function addPost(post) {
  return {
    type    : ADD_POST,
    payload : {
      post,
      id: postId++
    }
  }
}

export const actions = {
  addPost,
}

const initialState = []
export default function profileReducer (state = initialState, action) {
  if (action.type === ADD_POST) {
    console.log('add ', action.payload);
    state.push(action.payload);
  }
  console.log('return ', state);
  return state;
}

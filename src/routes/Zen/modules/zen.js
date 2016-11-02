
// ------------------------------------
// Constants
// ------------------------------------
export const REQUEST_ZEN = 'REQUEST_ZEN'
export const RECEIVE_ZEN = 'RECEIVE_ZEN'
export const SAVE_CURRENT_ZEN = 'SAVE_CURRENT_ZEN'
export const ADD_ZEN = 'ADD_ZEN'
export const REQUEST_EMOJI = 'REQUEST_EMOJI'
export const RECEIVE_EMOJI = 'RECEIVE_EMOJI'

// ------------------------------------
// Actions
// ------------------------------------

export const requestZen = () => {
  console.log('request ')
  return {
    type: REQUEST_ZEN
  }
}

let availableId = 0
export const receiveZen = (value) => {
  console.log('receive ', value)
  return {
    type: RECEIVE_ZEN,
    payload: {
      value,
      id: availableId++
    }
  }
}

export const addZen = () => {
  return {
    type: ADD_ZEN,
    payload: {
      value: document.getElementById('zenInput').value,
      id: availableId++
    }
  }
}
export const saveCurrentZen = () => {
  return {
    type: SAVE_CURRENT_ZEN
  }
}

export const fetchZen = () => {
  return (dispatch) => {
    dispatch(requestZen())

    return fetch('https://api.github.com/zen')
      .then(data => data.text())
      .then(text => dispatch(receiveZen(text)))
  }
}

export const requestEmoji = () => {
  return {
    type: REQUEST_EMOJI
  }
}

export const receiveEmoji = (emojiUrl) => {
  return {
    type: RECEIVE_EMOJI,
    payload: emojiUrl
  }
}

export const fetchEmoji = () => {
  const emoji = document.getElementById('emojiInput').value
  return (dispatch) => {
    dispatch(requestEmoji())

    return fetch('https://api.github.com/emojis')
      .then(data => data.text())
      .then(text => dispatch(receiveEmoji(JSON.parse(text)[emoji])))
  }
}

export const actions = {
  addZen,
  requestZen,
  receiveZen,
  fetchZen,
  saveCurrentZen,
  requestEmoji,
  receiveEmoji,
  fetchEmoji
}

const ZEN_ACTION_HANDLERS = {
  [REQUEST_ZEN]: (state) => {
    return ({ ...state, fetching: true })
  },
  [RECEIVE_ZEN]: (state, action) => {
    return ({ ...state, zens: state.zens.concat(action.payload), current: action.payload.id, fetching: false })
  },
  [SAVE_CURRENT_ZEN]: (state) => {
    return state.current != null ? ({ ...state, saved: state.saved.concat(state.current) }) : state
  },
  [ADD_ZEN]: (state, action) => {
    return action.payload.value !== '' ? ({ ...state,
      zens: state.zens.concat(action.payload),
      saved: state.saved.concat(action.payload.id) }) : state
  },
  [RECEIVE_EMOJI]: (state, action) => {
    return action.payload ? ({ ...state, emoji: action.payload }) : state
  }
}

const initialState = { fetching: false, current: null, emoji: null, zens: [], saved: [] }
export default function zenReducer (state = initialState, action) {
  const handler = ZEN_ACTION_HANDLERS[action.type]

  if (handler) {
    const res = handler(state, action)
    return res
  } else {
    return state
  }
}

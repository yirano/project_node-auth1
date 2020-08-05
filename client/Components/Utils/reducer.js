import { GET_USERS } from './actions'

const initialState = {
  users: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {

    case GET_USERS:
      return { ...state, ...payload }

    default:
      return state
  }
}

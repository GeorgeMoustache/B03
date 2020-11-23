import { USER_LOGIN, USER_LOGOUT } from '@actions/actionType'

const memberInfo = (initState = {}, action) => {
  switch (action.type) {
    case USER_LOGIN: {
      return action.payload
    }
    case USER_LOGOUT: {
      return {}
    }
    default:
      return initState
  }
}

export default memberInfo

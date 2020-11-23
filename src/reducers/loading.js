import {
  LOADING_CLOSE,
  LOADING_OPEN
} from '@actions/actionType'

const loading = (enabled = false, action) => {
  switch (action.type) {
    case LOADING_OPEN:
      return true
    case LOADING_CLOSE:
      return false
    default:
      return enabled
  }
}

export default loading
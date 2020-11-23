import { CONFIG } from '@actions/actionType'

const config = (initState = {}, action) => {
  switch (action.type) {
    case CONFIG:
      let newState = action.payload
      return newState
    default:
      return initState
  }
}

export default config
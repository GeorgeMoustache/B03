import {
  CLOSE_TOASTMSG,
  OPEN_TOASTMSG
} from '@actions/actionType'

const initState = {
  enabled: false,
  msg: ''
}

const toastMsg = (state = initState, action) => {
  switch (action.type) {
    case OPEN_TOASTMSG:
      return {
        enabled: true,
          msg: action.payload.msg
      };
    case CLOSE_TOASTMSG:
      return {
        ...initState
      };
    default:
      return state;
  }
}

export default toastMsg
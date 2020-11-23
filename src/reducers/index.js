import { combineReducers } from 'redux'
import config from './config'
import loading from './loading'
import memberInfo from './member'
import toastMsg from './toastMsg'
import webView from './webView'

const rootReducer = combineReducers({
  config,
  loading,
  toastMsg,
  memberInfo,
  webView,
  // more reducers...
})

export default rootReducer

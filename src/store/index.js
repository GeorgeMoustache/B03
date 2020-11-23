import { applyMiddleware, compose, createStore } from 'redux'

import reduxThunk from 'redux-thunk'
import rootReducer from '@reducers'

const isDev = process.env.NODE_ENV === 'development'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(reduxThunk),
    // isDev && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    // 上面原先的寫法，在沒有安裝Redux Dev Tool的瀏覽器會出錯，下面是網路上找到的寫法
    isDev && window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

export default store

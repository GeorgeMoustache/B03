import React from 'react'
import ReactDOM from 'react-dom'
import store from '@store'
import { Provider } from 'react-redux'
// components
import App from './App'
import { ThemeProvider } from 'styled-components'
// assets
import '@assets/styles/reset.css'
// utils
import theme from '@utils/theme'

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
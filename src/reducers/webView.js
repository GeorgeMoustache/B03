import { CLOSE_WEBVIEW, OPEN_WEBVIEW } from '@actions/actionType'

const toastMsg = (state = null, action) => {
  switch (action.type) {
    // 開啟WebView
    case OPEN_WEBVIEW: {
      const { title, url } = action.payload
      return {
        title,
        url,
      }
    }
    // 關閉WebView
    case CLOSE_WEBVIEW:
      return null

    // 預設，webView state => null
    default:
      return state
  }
}

export default toastMsg

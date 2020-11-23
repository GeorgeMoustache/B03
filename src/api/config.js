import { loadingClose, loadingOpen, memberInfoLogout, toastMsg } from '@actions'

import Axios from 'axios'
import Store from '@/store'

export const headers = {
  appKey: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_KEY : 'MzAwMCYzMDAwMTA=',
  appName: 'app',
  appVersion: 'v1.0.0',
  deviceId: '43ce86ff',
  validateTime: '1586325072921',
  accessMode: 'H5',
  osType: 1,
}

const axios = Axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/uat-api' : 'http://10.3.19.1:80/uat-api',
  method: 'POST',
  headers: headers
})

// Add a request interceptor
axios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    Store.dispatch(loadingOpen())
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    // 從response取得data
    const { data } = response

    if (!!data) {
      // 從data取得code
      const { code } = data
      // 9003 => token失效
      // 16110000 => 請登入
      // 16300000 => token檢驗失敗
      if (code === 9003 || code === 16110000 || code === 16300000) {
        // 1) 使用dispatch執行登出
        Store.dispatch(memberInfoLogout())
        // 2) 顯示Toast message
        Store.dispatch(toastMsg('使用者身份已失效'))
        Store.dispatch(loadingClose())
      }
    }

    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error

    // 如果Catch到錯誤，顯示Toast message：「后台系统错误」
    Store.dispatch(toastMsg('后台系统错误'))

    return Promise.reject(error)
  },
)

export default axios

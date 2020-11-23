import { CLOSE_TOASTMSG, CLOSE_WEBVIEW, CONFIG, LOADING_CLOSE, LOADING_OPEN, OPEN_TOASTMSG, OPEN_WEBVIEW, USER_LOGIN, USER_LOGOUT } from './actionType'
import { LOGIN } from '@router/links'
import { logout, updateMemberInfo, updateMemberPhone } from '@api'

import { deepClone } from '@utils'
import { history } from '@router'

// app config setting
export const config = (payload) => {
  return {type: CONFIG, payload: payload}
}

// loading layer control
export const loadingOpen = () => {
  return { type: LOADING_OPEN }
}

export const loadingClose = () => {
  return { type: LOADING_CLOSE }
}

// open toastMsg
export const toastMsg = (msg) => {
  return {
    type: OPEN_TOASTMSG,
    payload: {
      msg: msg
    }
  }
}

// close toastMsg
export const closeToastMsg = () => {
  return {
    type: CLOSE_TOASTMSG
  }
}

// 更新memberInfo
export const memberInfo = payload => {
  return { type: USER_LOGIN, payload: payload }
}

// 更新使用者真實姓名
export const updateMemberRealName = realName => (dispatch, getState) => {
  return new Promise(resolve => {
    // 取得現有Redux中的State
    const state = getState()
    // 如果Redux裡面沒有memberInfo，就不執行
    if ('memberInfo' in state === false) return
     
    // 深拷貝一份memberInfo
    const memberInfoClone = deepClone(state.memberInfo)
  
    updateMemberInfo({realName})
      .then(({data}) => {
        if (data.code === 0) {
          // 修改memberInfo的真實姓名
          memberInfoClone.realName = realName
          // 修改Redux中的真實姓名
          dispatch(memberInfo(memberInfoClone))
          // 將新的memberInfo存入LocalStorage
          localStorage.setItem('memberInfo', JSON.stringify(memberInfoClone))
          // 使用Toast Message告知修改成功
          dispatch(toastMsg('真实姓名添加成功'))
          // 回到個人資料設置頁
          return resolve()
        }
        if (data.code !== 0) return dispatch(toastMsg(data.message))
      })
      .finally(() => dispatch(loadingClose()))
  })
}

// 更新使用者出生日期
export const updateMemberBirthday = birthDay => (dispatch, getState) => {
  return new Promise(resolve => {
    // 取得現有Redux中的State
    const state = getState()
    // 如果Redux裡面沒有memberInfo，就不執行
    if ('memberInfo' in state === false) return
     
    // 深拷貝一份memberInfo
    const memberInfoClone = deepClone(state.memberInfo)
  
    updateMemberInfo({birthDay})
      .then(({data}) => {
        if (data.code === 0) {
          // 修改memberInfo的出生日期
          memberInfoClone.birthDay = birthDay
          // 修改Redux中的出生日期
          dispatch(memberInfo(memberInfoClone))
          // 將新的memberInfo存入LocalStorage
          localStorage.setItem('memberInfo', JSON.stringify(memberInfoClone))
          // 使用Toast Message告知修改成功
          dispatch(toastMsg('出生日期添加成功'))
          // 回到個人資料設置頁
          return resolve()
        }
        if (data.code !== 0) return dispatch(toastMsg(data.message))
      })
      .finally(() => dispatch(loadingClose()))
  })
}

// 更新使用者手機號碼
export const updateMemberPhoneNo = (phoneNo, code) => (dispatch, getState) => {
  return new Promise(resolve => {
    // 取得現有Redux中的State
    const state = getState()
    // 如果Redux裡面沒有memberInfo，就不執行
    if ('memberInfo' in state === false) return
     
    // 深拷貝一份memberInfo
    const memberInfoClone = deepClone(state.memberInfo)
  
    updateMemberPhone({phoneNo, code})
      .then(({data}) => {
        if (data.code === 0) {
          // 修改memberInfo的手機號碼
          memberInfoClone.phoneNo = phoneNo
          // 修改Redux中的手機號碼
          dispatch(memberInfo(memberInfoClone))
          // 將新的memberInfo存入LocalStorage
          localStorage.setItem('memberInfo', JSON.stringify(memberInfoClone))
          // 使用Toast Message告知修改成功
          dispatch(toastMsg('手机号码添加成功'))
          // 回到個人資料設置頁
          return resolve()
        }
        if (data.code !== 0) return dispatch(toastMsg(data.message))
      })
      .finally(() => dispatch(loadingClose()))
  })
}



// 使用者登出
export const memberInfoLogout = () => dispatch => {
  // 取得token
  const token = localStorage.getItem('token')
  // 如果有拿到token，就進行登出行為
  if (token) {
    // 1) 使用Api登出
    logout(token)
    // 2) 清除localStorage => token
    localStorage.removeItem('token')
    // 3) 清除清除localStorage => memberInfo
    localStorage.removeItem('memberInfo')
    // 4) 清除清除localStorage => 清除Download App Bar關閉時間
    localStorage.removeItem('DOWNLOAD_APP_CLOSED_TIME')
    // 5) 清除清除localStorage => 清除初次登入的Dialog關閉時間
    localStorage.removeItem('SYSTEM_DIALOG_CLOSE_TIME')
    // 6) 清除redux => memberInfo
    dispatch({ type: USER_LOGOUT })
    // 7) 導到登入頁
    history.push({
      pathname: LOGIN,
      search: 'logout',
    })
  }
}

// 開啟 webview
export const openWebView = ({ title, url }) => ({
  type: OPEN_WEBVIEW,
  payload: {
    title,
    url,
  },
})

// 關閉 webview
export const closeWebView = () => ({
  type: CLOSE_WEBVIEW,
})
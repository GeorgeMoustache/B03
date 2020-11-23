import React, { createContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// api
import { initSliderVerify } from '@api'
// actions
import { loadingClose, toastMsg } from '@actions'

export const EntryContext = createContext()

//帳密登錄時如 localStorage 有存資料直接取用
let loginAccount = ''
let loginPassword = ''

if (localStorage.getItem('loginAccount')) loginAccount = atob(localStorage.getItem('loginAccount'))
if (localStorage.getItem('loginPassword')) loginPassword = atob(localStorage.getItem('loginPassword'))

const EntryContextProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [contextValue, setContextValue] = useState({})
  const [entryType, setEntryType] = useState(0) // 0:登入; 1:註冊
  const [loginType, setLoginType] = useState(0) // 0:帳密登入; 1:手機號登入
  // 登入參數
  const [login, setLogin] = useState({
    params: {
      account: {
        username: loginAccount,
        password: loginPassword,
      },
      phone: {
        phoneNo: '',
        verificationCode: '',
      },
    },
    checkPassword: true,
  })
  // 註冊參數
  const [register, setRegister] = useState({
    params: {
      loginName: '',
      passWord: '',
      rePassWord: '',
      recommendCode: '',
    },
    checkTerms: true,
  })
  // 滑塊驗證參數
  const [sliderVerify, setSliderVerify] = useState({
    hasOpen: true,
    enabled: false,
    pass: false,
  })
  // 隱私條款參數
  const [terms, setTerms] = useState({
    enabled: false,
    title: '',
    type: '',
  })

  // // 取得滑塊驗證是否開啟
  useEffect(() => {
    initSliderVerify()
      .then(res => {
        const { code, data } = res.data
        if (code !== 0) return dispatch(toastMsg('滑块验证状态获取错误'))
        setSliderVerify(prevState => ({ ...prevState, hasOpen: data }))
      })
      .catch(() => dispatch(toastMsg('后台系统错误')))
      .finally(() => dispatch(loadingClose()))
  }, [dispatch])

  //如果網址有帶推薦碼就寫入參數
  useEffect(() => {
    const url = window.location.href
    if (url.indexOf('?') > -1 && url.indexOf('recommendCode')) {
      const arrUrl = url.split('?')
      const params = arrUrl[1].split('=')[1]
      setRegister(prevState => ({ ...prevState, params: { ...prevState.params, recommendCode: params } }))
    }
  }, [])

  // 綁定 context 資料
  useEffect(() => {
    setContextValue({
      entryType,
      setEntryType,
      loginType,
      setLoginType,
      login,
      setLogin,
      register,
      setRegister,
      sliderVerify,
      setSliderVerify,
      terms,
      setTerms,
    })
  }, [entryType, loginType, login, register, sliderVerify, terms])

  return <EntryContext.Provider value={contextValue}>{children}</EntryContext.Provider>
}

export default EntryContextProvider

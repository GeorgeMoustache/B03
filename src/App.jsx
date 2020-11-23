import React, { useEffect } from 'react'
import { HashRouter as Router } from 'react-router-dom'
import routerConfig from '@router/config'
import { useDispatch } from 'react-redux'
// constants
import { ACCESS_MODE, OS_TYPE } from '@constants/storage'
// components
import RouterGuard from '@router'
import BottomBar from '@components/BottomBar'
import Loading from '@components/Loading/'
import ToastMsg from '@components/ToastMsg/'
import WebView from '@pages/WebView'
// api
import { getConfig } from '@api'
// actions
import { config } from '@actions'
import { loadingClose } from '@actions'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const accessModeLocalStorage = localStorage.getItem(ACCESS_MODE)
    const osTypeLocalStorage = localStorage.getItem(OS_TYPE)

    // 如果已經有存accessMode及osType在localStorage中，不再獲取，一開始的身份確認之後就不更動
    if (accessModeLocalStorage && osTypeLocalStorage) return

    const searchParams = `?${window.location.href.split('?')[1]}`

    // 取得Query String
    const params = new URLSearchParams(searchParams)

    // 取得Query String中的accssMode
    const accessMode = params.get(ACCESS_MODE)
    const osType = params.get(OS_TYPE)

    // 有抓到accessMode，就轉成大寫存到localStorage，沒有的話就存h5的資訊
    if (accessMode) localStorage.setItem(ACCESS_MODE, accessMode.toUpperCase())

    // 有抓到osType，就轉成大寫存到localStorage，沒有的話就存h5的資訊
    if (osType) localStorage.setItem(OS_TYPE, osType.toUpperCase())
  }, [])

  getConfig()
    .then(res => {
      const { code, data } = res.data
      if (code !== 0) return
      dispatch(config(data))
    })
    .finally(() => dispatch(loadingClose()))

  return (
    <Router>
      <RouterGuard config={routerConfig} />
      <WebView />
      <BottomBar />
      <ToastMsg duration={3000} />
      <Loading />
    </Router>
  )
}

export default App

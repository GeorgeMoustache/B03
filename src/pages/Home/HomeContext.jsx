import React, { createContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// api
import { getHome } from '@api'
// acitons
import { loadingClose, toastMsg } from '@actions'

export const HomeContext = createContext()

const HomeContextProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [homeContext, setHomeContext] = useState({})

  useEffect(() => {
    // 紀錄元件是否加載中的變數
    let _isMounted = true

    // 取得首頁資訊：跑馬燈、Banners、訊息中心...等等
    getHome()
      .then(({ data }) => {
        if (!!data && data.code === 0) {
          const { announcement, billboard, carousel, games } = data.data

          if (_isMounted) setHomeContext({ announcement, billboard, carousel, games })
        } else {
          // TODO: Error handing
          dispatch(toastMsg(data.message))
        }
      })
      .finally(() => dispatch(loadingClose()))

    return () => (_isMounted = false)
  }, [dispatch])

  return <HomeContext.Provider value={homeContext}>{children}</HomeContext.Provider>
}

export default HomeContextProvider

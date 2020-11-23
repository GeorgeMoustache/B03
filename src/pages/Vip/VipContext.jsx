import React, { createContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// api
import { getPlayerStarInfo, getVipList, getVipRate } from '@api'
// actions
import { loadingClose, toastMsg } from '@actions'

export const VipContext = createContext({})

const VipContextProvider = ({ children }) => {
  const dispatch = useDispatch()
  const [contextValue, setContextValue] = useState({})
  const [playerInfo, setPlayerInfo] = useState()
  const [vipInfo, setVipInfo] = useState()
  const [gameRate, setGameRate] = useState()
  const [levelRate, setLevelRate] = useState()
  const [cardIdx, setCardIdx] = useState()

  // 取資料
  useEffect(() => {
    // 會員資訊
    getPlayerStarInfo()
      .then(res => {
        const { code, message, data } = res.data
        if (code !== 0) return dispatch(toastMsg(message))
        setPlayerInfo(data)
        setCardIdx(data.currentStarCode)
      })
      .finally(() => dispatch(loadingClose()))

    // vip 資訊
    getVipList()
      .then(res => {
        const { code, message, data } = res.data
        if (code !== 0) return dispatch(toastMsg(message))
        setVipInfo(data)
      })
      .finally(() => dispatch(loadingClose()))

    // vip 比例
    getVipRate()
      .then(res => {
        const { code, message, data } = res.data
        if (code !== 0) return dispatch(toastMsg(message))
        let copyList = data.slice()

        let levelList = []
        copyList[0].starRestorationList.forEach((item, idx) => {
          levelList.push([item.kindName])

          copyList.forEach(childItem => {
            levelList[idx].push(childItem.starRestorationList[idx].restoration)
          })
        })

        let gameList = []
        for (let i = 0; i < copyList.length; i++) {
          gameList.push([])
          copyList[i].starRestorationList.forEach(item => {
            gameList[i].push({ title: item.kindName, rate: item.restoration })
          })
        }

        setGameRate(gameList)
        setLevelRate(levelList)
      })
      .finally(() => dispatch(loadingClose()))
  }, [dispatch])

  useEffect(() => {
    if (playerInfo && vipInfo && gameRate && levelRate) dispatch(loadingClose())
  }, [dispatch, playerInfo, vipInfo, gameRate, levelRate])

  // 初始化 contextValue
  useEffect(() => {
    setContextValue({
      levelList: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      playerInfo,
      vipInfo,
      levelRate,
      gameRate,
      cardIdx,
      setCardIdx,
    })
  }, [playerInfo, vipInfo, gameRate, levelRate, cardIdx])

  return <VipContext.Provider value={contextValue}>{children}</VipContext.Provider>
}

export default VipContextProvider

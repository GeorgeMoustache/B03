import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Constants
import { ACCESS_MODE } from '@constants/storage'
// components
import * as S from './style.jsx'
// assets
import GameEmptyImg from '@assets/images/home/game/game_empty-status.png'
// api
import { goGame } from '@api'
// actions
import { openWebView, toastMsg, loadingClose } from '@actions'
// utils
import { checkIsObjectEmpty } from '@utils'

const GameList = ({ displayGameList }) => {
  const memberInfo = useSelector(({ memberInfo }) => memberInfo)
  const dispatch = useDispatch()

  /**
   * @name goToGamePage
   * @param {Object} item Home Api 取得的遊戲資訊，提供像Name、Id這類的資訊
   * @description 點擊首頁遊戲列表的行為，會打一個API，然後開啟遊戲畫面
   */
  const goToGamePage = async item => {
    if (process.env.NODE_ENV === 'development') console.log('GameList -> item', item)
    // 使用者是否登入
    const isLogin = !checkIsObjectEmpty(memberInfo)
    // 不支援iframe的遊戲列表
    const gamesNotSupportIframe = [1202, 1304, 1404, 1602, 1603, 1606, 1701, 3502]

    // 如果使用者未登入，顯示toast訊息
    if (!isLogin) return dispatch(toastMsg('此功能仅对注册用户开放'))
    // 如果遊戲維護中，顯示toast訊息
    if (item.isMaintain) return dispatch(toastMsg('游戏维护中'))

    let winOpener = null
    let params = { platformCode: item.id }

    // 上面列表的遊戲因為不支援iframe，所以直接開新頁面，這邊先開啟頁面
    if (gamesNotSupportIframe.includes(item.id)) winOpener = window.open()

    goGame(params)
      .then(res => {
        const { code, message, data } = res.data

        // 如果goGame這個Api有錯，關閉剛剛開啟的iframe，並顯示Toast Message
        if (code !== 0) {
          if (!!winOpener) winOpener.close()
          return dispatch(toastMsg(message))
        }

        // 上面列表的遊戲不支持iframe，所以直接另開新頁
        if (gamesNotSupportIframe.includes(item.id)) {
          const accessMode = localStorage.getItem(ACCESS_MODE)

          // 如果AccessMode是App，帶入b03://前綴
          if (accessMode === 'APP') return (window.location.href = `b03://${data.url}`)
          
          // 如果是 h5 使用 opener 打開
          winOpener.location.href = data.url
        } else {
          // 開啟webview，從Prop取得遊戲名稱，從goGame API取得url
          dispatch(openWebView({ title: item.name, url: data.url }))
        }
      })
      .finally(() => dispatch(loadingClose()))
  }

  // 如果沒有GameList，顯示空狀態
  if (!displayGameList) {
    return (
      <S.GameList>
        <S.GameEmpty>
          <img src={GameEmptyImg} alt='No games' />
          <span>系统升级中</span>
        </S.GameEmpty>
      </S.GameList>
    )
  }

  const renderGameListItems = displayGameList => {
    const { items } = displayGameList

    return (
      !!items &&
      items.map(item => (
        <S.GameListItem key={item.id} onClick={() => goToGamePage(item)}>
          <img src={item.image} alt={item.name} />
        </S.GameListItem>
      ))
    )
  }

  return <S.GameList>{renderGameListItems(displayGameList)}</S.GameList>
}

export default GameList

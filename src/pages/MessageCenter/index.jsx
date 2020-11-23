import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// components
import * as S from './style'
import TopBar from '@components/TopBar'
import MessageCenterItem from './MessageCenterItem'
import Offline from './Offline'
// assets
import messageCenterEmptyImg from '@assets/images/messageCenter/icon__message-center_empty.png'
// api
import { getAnnouncementList } from '@api'
// actions
import { loadingClose } from '@actions'

const MessageCenter = () => {
  const dispatch = useDispatch()
  // 展開的id，預設是-1，沒有任何item展開
  const [expandId, setExpandId] = useState(-1)
  // 消息中心內文的資料
  const [messageCenterData, setMessageCenterData] = useState(undefined)
  // API回傳資訊是否正常，空或是code為500時，將isOffline值設為true
  const [isOffline, setIsOffline] = useState(false)

  // 載入的時候，獲取Announcement資料
  useEffect(() => {
    getAnnouncementList()
      .then(({ data }) => {
        try {
          // API正常時
          if (data.code === 0) {
            return setMessageCenterData(data.data.marqueeList)
          }

          // 如果API回傳的code為500時，或是沒有data值，顯示網路不給力畫面
          if (data.code === 500 || !data) {
            return setIsOffline(true)
          }
        } catch (error) {
          // 如果有Catch到什麼Error，顯示網路不給力畫面
          return setIsOffline(true)
        }
      })
      .finally(() => dispatch(loadingClose()))
  }, [dispatch])

  const renderContent = () => {
    // API回傳資訊如果是空，或是code:500，顯示網路不給力畫面
    if (isOffline) {
      return <Offline />
    }

    // 沒有獲得任何資料時，渲染空狀態
    if (!messageCenterData || messageCenterData.length === 0) {
      return (
        <S.EmptyContent>
          <img src={messageCenterEmptyImg} alt='Message center with no message' />
          <span>还没有新的消息</span>
        </S.EmptyContent>
      )
    }

    // 正常的時候，顯示消息中心列表
    return (
      <S.MainContent>
        <S.List>
          {messageCenterData.map(item => (
            <MessageCenterItem key={item.id} item={item} expandId={expandId} setExpandId={setExpandId} />
          ))}
        </S.List>
      </S.MainContent>
    )
  }

  return (
    <S.Container>
      <TopBar left={BACK} title='消息中心' />
      {renderContent()}
    </S.Container>
  )
}

export default MessageCenter

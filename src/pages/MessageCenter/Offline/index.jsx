import React from 'react'
// components
import * as S from './style'
// assets
import offlineImg from '@assets/images/offline/icon__offline.png'

const Offline = () => {
  // 重整畫面
  const reload = () => {
    window.location.reload()
  }

  return (
    <S.Container>
      <S.OfflineImg src={offlineImg} alt='Offline' />
      <S.OfflineTag>网路不给力</S.OfflineTag>
      <S.OfflineTag>别紧张，刷新页面试试</S.OfflineTag>
      <S.ReloadButton onClick={reload}>刷新一下</S.ReloadButton>
    </S.Container>
  )
}

export default Offline

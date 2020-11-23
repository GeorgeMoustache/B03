import React, { useEffect, useState } from 'react'
// constants
import { ACCESS_MODE, DOWNLOAD_APP_CLOSED_TIME } from '@constants/storage'
// components
import * as S from './styled'
import DownloadAppButton from './DownloadAppButton'
// assets
import AppIconImg from '@assets/images/home/downloadApp/icon__app_yabo.png'
import CloseButtonImg from '@assets/images/home/downloadApp/button__download-app_close.png'
// utils
import moment from 'moment'

const DownloadApp = () => {
  // 定義useState，關於是否顯示Download App Bar
  const [isShowDownloadApp, setIsShowDownloadApp] = useState(true)

  // 負責Download App Bar是否要開啟的邏輯
  useEffect(() => {
    // 先將Download App Bar設為關閉，下面邏輯判斷是否需要開啟
    setIsShowDownloadApp(false)

    // 取得localStorage中，關閉Download App Bar的時間
    const downloadAppClosedTime = localStorage.getItem(DOWNLOAD_APP_CLOSED_TIME)

    // 沒有這個資料的話，就開啟Download App Bar
    if (!downloadAppClosedTime) return setIsShowDownloadApp(true)

    // 有取得關閉時間的話，就計算跟現在的時間差距
    const diff = downloadAppClosedTime && moment().diff(downloadAppClosedTime, 'hours')

    // 時間差距超過一小時，就把顯示Download App Bar的開關打開
    if (diff >= 1) {
      // 清掉localStorage
      localStorage.removeItem(DOWNLOAD_APP_CLOSED_TIME)
      // 將Download App Bar的開關打開
      return setIsShowDownloadApp(true)
    }
  }, [setIsShowDownloadApp])

  // 關閉Download App Bar
  const handleCloseDownloadApp = () => {
    // 0) 取得現在時間
    const now = moment().format()
    // 1) 在localStorage紀錄關閉時間
    localStorage.setItem(DOWNLOAD_APP_CLOSED_TIME, now)
    // 2) 將Download App Bar的顯示開關 -> 關閉
    setIsShowDownloadApp(false)
  }

  // 如果是APP開啟，不要顯示Download App Bar
  useEffect(() => {
    const accessMode = localStorage.getItem(ACCESS_MODE)

    if (accessMode && accessMode === 'APP') setIsShowDownloadApp(false)
  }, [])

  if (!isShowDownloadApp) return null

  return (
    <S.DownloadApp>
      <S.CloseButton onClick={handleCloseDownloadApp}>
        <img src={CloseButtonImg} alt='Close button for Download App Bar' />
      </S.CloseButton>
      <S.AppIcon src={AppIconImg} />
      <S.DownloadAppTextContent>
        <h3>亚博APP</h3>
        <p>真人娱乐，体育投注，电子游艺等尽在一手掌握</p>
      </S.DownloadAppTextContent>
      <DownloadAppButton />
    </S.DownloadApp>
  )
}

export default DownloadApp

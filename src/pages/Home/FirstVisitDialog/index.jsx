import React, { useContext, useEffect, useState } from 'react'
// context
import { HomeContext } from '../HomeContext'
// constants
import { SYSTEM_DIALOG_CLOSE_TIME } from '@constants/storage'
// components
import Dialog from '@components/Dialog'
// utils
import moment from 'moment'

// 取得今日日期
const today = moment().format('YYYY-MM-DD')

/**
 * @name FirstVisitDialog
 * @description 系統公告用的Dialog component
 */
const FirstVisitDialog = () => {
  // Dialog開關的state
  const [isShowDialog, setIsShowDialog] = useState(false)
  // 從HomeContext取得billboard(系統公告物件)
  const { billboard } = useContext(HomeContext)

  // 如果今天有關閉過系統公告，就不再顯示在畫面上
  useEffect(() => {
    // 1) 取得LocalStorage中，關閉系統公告的紀錄
    const systemDialogCloseTime = localStorage.getItem(SYSTEM_DIALOG_CLOSE_TIME)

    // 2) 如果找不到紀錄，或者紀錄不是今天，就顯示系統公告彈出視窗
    if (!systemDialogCloseTime || systemDialogCloseTime !== today) {
      // 打開系統公告
      setIsShowDialog(true)
      // 清除LocalStorage
      localStorage.removeItem(SYSTEM_DIALOG_CLOSE_TIME)
    }
  }, [])

  // 關閉事件，關閉Dialog之外，在LocalStorage存取關閉日期
  const handleCloseDialog = () => {
    // 關閉Dialog
    setIsShowDialog(false)
    // 在LocalStorage存取關閉日期
    localStorage.setItem(SYSTEM_DIALOG_CLOSE_TIME, today)
  }

  if (!billboard || !isShowDialog) return null

  return (
    <Dialog
      title={billboard.title}
      content={billboard.content}
      extraButtons={{ title: '我知道了', handleClick: handleCloseDialog }}
    />
  )
}

export default FirstVisitDialog

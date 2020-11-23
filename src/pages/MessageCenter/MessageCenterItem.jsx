import React, { useEffect, useState } from 'react'
// components
import * as S from './style'
// assets
import collapseButtonImg from '@assets/images/common/button_collapse.png'
import expandButtonImg from '@assets/images/common/button_expand.png'

/**
 * @name MessageCenterItem
 * @param {Object} props
 * @param props.item 要被渲染的Announcement物件
 * @param props.expandId 被展開的id
 * @param props.setExpandId 設定誰被展開的function
 * @description 選染單筆的Announcement資料
 */
const MessageCenterItem = ({ item, expandId, setExpandId }) => {
  // 文字是否要被Truncate，就是超過一行的時候顯示[Something..]
  const [isTruncate, setIsTruncate] = useState(false)

  useEffect(() => {
    // 如果expandId改變的時候，如果原本展開的物件會收合，要把該物件的文字truncate
    // 如果全部物件被收合的時候，也要把全部物件的truncate打開
    if ((item.id !== expandId && !isTruncate) || expandId === -1) {
      setImmediate(() => setIsTruncate(true))
    }
    // 畫面剛載入的時候，全部item都要被truncate
    setIsTruncate(item.id !== expandId)
  }, [expandId, isTruncate, item.id])

  /**
   * @name handleToggleExpand
   * @description 當展開/收合按鈕被點擊的時候，要執行的事件
   */
  const handleToggleExpand = () => {
    // 如果是同一個展開的物件被重複點擊，將全部物件收起，也就是把expandId設為-1
    if (expandId === item.id) return setExpandId(-1)

    // 如果是不同物件被點擊
    // 1) 首先先將truncate關閉，不然會因為沒有高度，所以無法展開
    setIsTruncate(false)
    // 2) 設定展開的物件是誰
    setExpandId(item.id)
  }

  // 單純取出beginTime的日期
  const getBeginDate = beginTime => {
    return beginTime.split(' ')[0]
  }

  return (
    <S.ListItem key={item.id} className={item.id === expandId && 'isExpand'} onClick={handleToggleExpand}>
      <S.ListItemContent>
        <S.Title>{getBeginDate(item.beginTime)}</S.Title>
        <S.Content isTruncate={isTruncate}>{item.annContent}</S.Content>
      </S.ListItemContent>
      <S.ToggleCollapseButton>
        <img src={item.id === expandId ? collapseButtonImg : expandButtonImg} alt='Expand button' />
      </S.ToggleCollapseButton>
    </S.ListItem>
  )
}

export default MessageCenterItem

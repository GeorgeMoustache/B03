import React, { Fragment, memo, useContext, useEffect, useState } from 'react'
// context
import { HomeContext } from '../HomeContext'
// plugins
import Ticker from 'react-ticker'
// components
import * as S from './style'
import MarqueeDialog from '../MarqueeDialog'
// assets
import MarqueeIcon from '@assets/images/home/marquee/icon__marquee.png'

const Marquee = () => {
  // 從context取得跑馬燈訊息
  const { announcement } = useContext(HomeContext)
  // 跑馬燈列表
  const [marqueeList, setMarqueeList] = useState(null)
  // 被點擊的單則跑馬燈
  const [selectedMarqueeItem, setSelectedMarqueeItem] = useState(undefined)

  useEffect(() => {
    // 如果announcement是undefined，不做事情
    if (!announcement) return
    // 如果announcement裡面沒有items這個property，不做事情
    if (!('items' in announcement)) return

    // 重組跑馬燈資料
    const refactoredMarqueeList = announcement.items.map(({ title, content }, index) => ({
      id: index,
      title,
      content,
    }))

    // 更新marqueeList
    setMarqueeList(refactoredMarqueeList)
  }, [announcement])

  useEffect(() => {
    // 解決ES-Lint錯誤: 在Unmounted component去updateState
    return () => setSelectedMarqueeItem(undefined)
  }, [])

  // 選染跑馬燈內文，使用button，點擊會彈出視窗，顯示對應的詳細內容
  const renderReactSimpleMarquee = () => {
    // 沒有拿到資料前，不渲染
    if (!marqueeList) return null

    // 點擊跑馬燈內文的行為 => 彈出視窗，顯示對應的詳細內容
    const handldClick = marqueeItem => e => {
      // 取消跑馬燈點擊，動畫會暫停的行為
      const textWrapper = e.target.parentNode.parentNode
      textWrapper.style.animationPlayState = 'running'
      // 將被點擊的資訊設到selectedMarqueeItem中
      setSelectedMarqueeItem(marqueeItem)
    }

    // 選染跑馬燈內文
    return marqueeList.map(marqueeItem => (
      <S.MarqueeText onClick={handldClick(marqueeItem)} key={marqueeItem.id}>
        {marqueeItem.content}
      </S.MarqueeText>
    ))
  }

  return (
    <Fragment>
      <MarqueeDialog selectedMarqueeItem={selectedMarqueeItem} setSelectedMarqueeItem={setSelectedMarqueeItem} />
      <S.Marquee>
        <S.Icon src={MarqueeIcon} />
        {!!marqueeList && <Ticker mode='smooth'>{() => <>{renderReactSimpleMarquee()}</>}</Ticker>}
      </S.Marquee>
    </Fragment>
  )
}

export default memo(Marquee)

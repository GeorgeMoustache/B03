import React, { useEffect } from 'react'
// components
import * as S from './style'
// assets
import boardIconImg from '@assets/images/home/nav/nav__board.png'
import boardIconImgActive from '@assets/images/home/nav/nav__board_active.png'
import eGameIconImg from '@assets/images/home/nav/nav__egame.png'
import eGameIconImgActive from '@assets/images/home/nav/nav__egame_active.png'
import eSportIconImg from '@assets/images/home/nav/nav__esport.png'
import eSportIconImgActive from '@assets/images/home/nav/nav__esport_active.png'
import fishingIconImg from '@assets/images/home/nav/nav__fishing.png'
import fishingIconImgActive from '@assets/images/home/nav/nav__fishing_active.png'
import liveIconImg from '@assets/images/home/nav/nav__live.png'
import liveIconImgActive from '@assets/images/home/nav/nav__live_active.png'
import lotteryIconImg from '@assets/images/home/nav/nav__lottery.png'
import lotteryIconImgActive from '@assets/images/home/nav/nav__lottery_active.png'
import sportIconImg from '@assets/images/home/nav/nav__sport.png'
import sportIconImgActive from '@assets/images/home/nav/nav__sport_active.png'

/**
 * 亞博顯示的遊戲名稱，跟後端api回傳的資料名稱不同
 * 因為後台資料會跟其他專案共用，所以沒辦法改
 *
 * 這個表格是，前端Tab名稱，與後台Api對應Key的對照表
 * 格式：前端顯示的名稱 => 後端Api對應的Key值
 *
 * 真人 => 01
 * 电子 => 02
 * 棋盘 => 03
 * 彩票 => 04
 * 体育 => 05
 * 捕鱼 => 06
 * 电竞 => 07
 */

// 用來迴圈Tab的資料
const navObj = {
  sport: {
    label: '体育', // 顯示的Tab名稱
    icon: {
      default: sportIconImg, // 預設的Tab圖片
      active: sportIconImgActive, // 目前激活的Tab圖片
    },
    backKey: '05', // 對應後端的Game的Key值
  },
  live: {
    label: '真人',
    icon: {
      default: liveIconImg,
      active: liveIconImgActive,
    },
    backKey: '01',
  },
  board: {
    label: '棋盘',
    icon: {
      default: boardIconImg,
      active: boardIconImgActive,
    },
    backKey: '03',
  },
  esport: {
    label: '电竞',
    icon: {
      default: eSportIconImg,
      active: eSportIconImgActive,
    },
    backKey: '07',
  },
  lottery: {
    label: '彩票',
    icon: {
      default: lotteryIconImg,
      active: lotteryIconImgActive,
    },
    backKey: '04',
  },
  egame: {
    label: '电子',
    icon: {
      default: eGameIconImg,
      active: eGameIconImgActive,
    },
    backKey: '02',
  },
  fishing: {
    label: '捕鱼',
    icon: {
      default: fishingIconImg,
      active: fishingIconImgActive,
    },
    backKey: '06',
  },
}

const Nav = ({ gameKey, setGameKey }) => {
  // 畫面載入時，選擇第一個Tab
  useEffect(() => {
    // 1) 取得第一個Item的資訊
    const firstNavItem = Object.values(navObj)[0]
    // 2) 將Item中的backKey，設定至GameKey
    if (!!firstNavItem) setGameKey(firstNavItem.backKey)
  }, [setGameKey])

  const renderNavItems = () => {
    return Object.entries(navObj).map(([navItemId, navItem]) => {
      // 如果目前的gameKey與navItem的backKey相同，顯示active狀態
      const isActive = navItem.backKey === gameKey

      // NavItem被點擊的事件
      const handleClick = () => {
        setGameKey(navItem.backKey)
      }

      return (
        <S.NavItem key={navItemId} active={isActive} onClick={handleClick}>
          <S.NavItemIcon src={isActive ? navItem.icon.active : navItem.icon.default} />
          <S.NavItemLabel>{navItem.label}</S.NavItemLabel>
        </S.NavItem>
      )
    })
  }

  return <S.Nav>{renderNavItems()}</S.Nav>
}

export default Nav

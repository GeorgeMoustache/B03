import React from 'react'
// constants
import { MESSAGE_CENTER, SETTING } from '@constants/topBarButtonTypes'
// components
import * as S from './style'
import TopBar from '@components/TopBar'
import AccountLinks from './AccountLinks'
import AdditionalLinks from './AdditionalLinks'
import MemberInfo from './MemberInfo'
import PromotionLinks from './PromotionLinks'

/**
 * ----------------------------------------------------
 * TopBar
 * ----------------------------------------------------
 * MemberInfo => 大頭照、加入天數...，或是點擊註冊/登入
 * ----------------------------------------------------
 * PromotionLinks => VIP特權、亞博商城
 * ----------------------------------------------------
 * AccountLinks => 我的錢包、投注紀錄、交易紀錄、卡片管理...
 * ----------------------------------------------------
 * AdditionalLinks => 兌獎紀錄、幫助中心、邀請好友...
 * ----------------------------------------------------
 *
 */
const Mine = () => {
  return (
    <S.Container>
      <TopBar title='我的' right={[SETTING, MESSAGE_CENTER]} />
      <S.MainContent>
        <MemberInfo />
        <PromotionLinks />
        <AccountLinks />
        <AdditionalLinks />
      </S.MainContent>
    </S.Container>
  )
}

export default Mine

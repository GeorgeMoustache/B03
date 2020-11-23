import React from 'react'
// components
import * as S from './style'
// assets
import customerServiceArrowImg from '@assets/images/customer/icon__customerService_right-arrow.png'
// utils
import { handleCustomerServiceClick } from '@utils'

const CustomerLink = () => {
  return (
    <S.CustomerLinkContainer onClick={handleCustomerServiceClick}>
      <S.CustomerLinkTitle>在线客服</S.CustomerLinkTitle>
      <S.CustomerLinkSubtitle>Human Customer Support</S.CustomerLinkSubtitle>
      <S.CustomerLinkDescription>7*24小时专线服务 贴心至上</S.CustomerLinkDescription>
      <S.CustomerLinkButton src={customerServiceArrowImg} />
    </S.CustomerLinkContainer>
  )
}

export default CustomerLink

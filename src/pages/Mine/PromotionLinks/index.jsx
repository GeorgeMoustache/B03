import React from 'react'
import { useHistory } from 'react-router'
import { VIP } from '@router/links'
// components
import * as S from './style'
// assets
import vipPrivilegeImg from '@assets/images/mine/promotionLink/icon__promotion-links_vip-privilege.png'
import yaboImg from '@assets/images/mine/promotionLink/icon__promotion-links_yabo-shop.png'

const PromotionLinks = () => {
  const history = useHistory()

  return (
    <S.Container>
      <S.MainContent>
        <S.LinkItem onClick={() => history.push(VIP)}>
          <S.Icon src={vipPrivilegeImg} />
          <div>
            <S.Title>VIP特权</S.Title>
            <S.SubTitle>VIP PRIVILEGE</S.SubTitle>
          </div>
        </S.LinkItem>
        <S.LinkItem>
          <S.Icon src={yaboImg} />
          <div>
            <S.Title>亚博商城</S.Title>
            <S.SubTitle>YABO MALL</S.SubTitle>
          </div>
        </S.LinkItem>
      </S.MainContent>
    </S.Container>
  )
}

export default PromotionLinks

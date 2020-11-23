import React from 'react'
import { useHistory } from 'react-router'
import {
  PROFILE_BANKCARDS,
  PROFILE_BETTINGS_RECORD,
  PROFILE_TRANSACTIONS_RECORD,
  DEPOSIT,
  WITHDRAWAL,
} from '@router/links'
// components
import * as S from './style'
// assets
import imgBettingRecord from '@assets/images/mine/accountLink/icon__account-link_betting-record.png'
import imgCardManagement from '@assets/images/mine/accountLink/icon__account-link_card-management.png'
import imgTransaction from '@assets/images/mine/accountLink/icon__account-link_transaction.png'
import imgDeposit from '@assets/images/mine/accountLink/icon__account-link_deposit.png'
import imgWithdraw from '@assets/images/mine/accountLink/icon__account-link_withdraw.png'

const accountLinksObj = [
  {
    title: '存款',
    img: imgDeposit,
    link: DEPOSIT,
  },
  {
    title: '取款',
    img: imgWithdraw,
    link: WITHDRAWAL,
  },
  {
    title: '投注记录',
    img: imgBettingRecord,
    link: PROFILE_BETTINGS_RECORD,
  },
  {
    title: '交易纪录',
    img: imgTransaction,
    link: PROFILE_TRANSACTIONS_RECORD,
  },
  {
    title: '卡片管理',
    img: imgCardManagement,
    link: PROFILE_BANKCARDS,
  },
]

const AccountLinks = () => {
  const history = useHistory()

  return (
    <S.Container>
      {accountLinksObj.map(item => (
        <S.LinkItem key={item.title} onClick={() => history.push(item.link)}>
          <img src={item.img} alt={item.title} />
          <span>{item.title}</span>
        </S.LinkItem>
      ))}
    </S.Container>
  )
}

export default AccountLinks

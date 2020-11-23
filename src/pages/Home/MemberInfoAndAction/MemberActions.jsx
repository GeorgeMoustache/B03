import React from 'react'
import { useHistory } from 'react-router'
// Constants
import { DEPOSIT, VIP, WITHDRAWAL } from '@router/links'
// components
import * as S from './style'
// assets
import iconDeposit from '@assets/images/common/icon__deposit.png'
import iconVip from '@assets/images/common/icon__vip.png'
import iconWithdrawal from '@assets/images/common/icon__withdrawal.png'

const MemberActions = () => {
  const history = useHistory()

  return (
    <S.MemberActionContainer>
      <S.MemeberAction onClick={() => history.push(DEPOSIT)}>
        <img src={iconDeposit} alt='Deposit' />
        <span>存款</span>
      </S.MemeberAction>
      <S.MemeberAction onClick={() => history.push(WITHDRAWAL)}>
        <img src={iconWithdrawal} alt='WithDrawal' />
        <span>取款</span>
      </S.MemeberAction>
      <S.MemeberAction onClick={() => history.push(VIP)}>
        <img src={iconVip} alt='Vip' />
        <span>VIP</span>
      </S.MemeberAction>
    </S.MemberActionContainer>
  )
}

export default MemberActions

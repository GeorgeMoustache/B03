import React from 'react'
// components
import * as S from './style'
import MemberActions from './MemberActions'
import MemberInfo from './MemberInfo'

const MemberInfoAndAction = () => {
  return (
    <S.MemberContainer>
      <MemberInfo />
      <MemberActions />
    </S.MemberContainer>
  )
}

export default MemberInfoAndAction

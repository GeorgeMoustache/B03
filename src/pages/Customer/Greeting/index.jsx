import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
// components
import * as S from './style'
// assets
import avatarMemberImg from '@assets/images/mine/avatar/img__avatar_member.png'
import avatarVisitorImg from '@assets/images/mine/avatar/img__avatar_visitor.png'
// utils
import { checkIsObjectEmpty } from '@utils'

const Greeting = () => {
  const [isLogin, setIsLogin] = useState(false)
  const memberInfo = useSelector(({ memberInfo }) => memberInfo)

  useEffect(() => {
    setIsLogin(!checkIsObjectEmpty(memberInfo))
  }, [memberInfo])

  return (
    <S.GreetingContainer>
      <S.MemberAvatar src={isLogin ? avatarMemberImg : avatarVisitorImg} />
      <div>
        <S.SayHiToUser>Hi, {isLogin ? memberInfo.loginName : '尊敬的用户'}</S.SayHiToUser>
        <S.CannedGreeting>欢迎来到客服中心</S.CannedGreeting>
      </div>
    </S.GreetingContainer>
  )
}

export default Greeting

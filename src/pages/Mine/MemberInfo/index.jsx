import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { PROFILE, REGISTER } from '@router/links'
import { useSelector } from 'react-redux'
// components
import * as S from './style'
// assets
import avatarMemberImg from '@assets/images/mine/avatar/img__avatar_member.png'
import avatarVisitorImg from '@assets/images/mine/avatar/img__avatar_visitor.png'
// utils
import { checkIsObjectEmpty } from '@utils'
import moment from 'moment'

const MemberInfo = () => {
  const history = useHistory()
  const memberInfo = useSelector(({ memberInfo }) => memberInfo)
  // 使用者是否登入狀態的state
  const [isLogin, setIsLogin] = useState(false)
  // 使用者加入會員的天數
  const [joinedDuration, setJoinedDuration] = useState(0)

  // 如果memberInfo有資料，表示使用者是登入狀態
  useEffect(() => {
    checkIsObjectEmpty(memberInfo) ? setIsLogin(false) : setIsLogin(true)
  }, [memberInfo])

  // 當使用者登入，計算使用者的加入天數
  useEffect(() => {
    if (isLogin) {
      const now = moment()
      const registerTime = moment(memberInfo.registerTime)
      const diff = now.diff(registerTime, 'days')

      setJoinedDuration(diff)
    }
  }, [isLogin, memberInfo.registerTime])

  // 未登入UI
  if (!isLogin) {
    return (
      <S.MemberInfoContainer onClick={() => history.push(REGISTER)}>
        <S.MemberAvatar src={avatarVisitorImg} alt='Visitor avatar' />
        <S.LoginRegisterButton>点击登录/注册</S.LoginRegisterButton>
        <S.ButtonVisitMore />
      </S.MemberInfoContainer>
    )
  }

  return (
    <S.MemberInfoContainer onClick={() => history.push(PROFILE)}>
      <S.MemberAvatar src={avatarMemberImg} alt='Member avatar' />
      <div>
        <S.MemberUserName level={memberInfo.starLevel}>{memberInfo.loginName}</S.MemberUserName>
        <S.MemberAdditionalInfo>加入亚博体育第{joinedDuration}天</S.MemberAdditionalInfo>
      </div>
      <S.ButtonVisitMore />
    </S.MemberInfoContainer>
  )
}

export default MemberInfo

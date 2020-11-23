import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
import { FEEDBACK, RESET_PASSWORD, PROFILE } from '@router/links'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// components
import * as S from './style'
import TopBar from '@components/TopBar'
import Dialog from '@components/Dialog/'
// actions
import { memberInfoLogout } from '@actions'

const Setting = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const { phoneNo } = useSelector(state => state.memberInfo)
  const [dialogEnabled, setDialogEnabled] = useState(false)

  // 點擊修改密碼連結，判斷如沒有手機號碼，呼叫 dialog 協助用戶導向綁定
  const handleResetPassword = () => {
    phoneNo ? history.push(RESET_PASSWORD) : setDialogEnabled(true)
  }

  // dialog confirm event
  const handleDialogClose = () => history.push(PROFILE)

  return (
    <S.Container>
      <TopBar title='设置' left={BACK} />
      <S.MainContent>
        <div>
          <S.ListItem onClick={handleResetPassword}>
            <S.ListItemContent>修改密码</S.ListItemContent>
          </S.ListItem>
          <S.ListItem onClick={() => history.push(FEEDBACK)}>
            <S.ListItemContent>意见反馈</S.ListItemContent>
          </S.ListItem>
        </div>
        <div>
          <S.logoutButton onClick={() => dispatch(memberInfoLogout())}>退出</S.logoutButton>
        </div>
      </S.MainContent>
      {dialogEnabled && <Dialog
          title='手机号码未绑定'
          content='请先前往个人设置绑定真实姓名和手机号码'
          extraButtons={{ title: '知道了', handleClick: handleDialogClose }}
        />}
    </S.Container>
  )
}

export default Setting

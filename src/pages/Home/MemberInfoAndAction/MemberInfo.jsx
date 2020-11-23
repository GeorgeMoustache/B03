import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { REGISTER } from '@router/links'
import { useDispatch, useSelector } from 'react-redux'
// components
import * as S from './style'
// api
import { getWallet } from '@api'
// Actions
import { loadingClose, toastMsg } from '@actions'
// utils
import { checkIsObjectEmpty, moneyFix } from '@utils'

const MemberInfo = () => {
  const dispatch = useDispatch()
  // 定義history來操作路由
  const history = useHistory()
  // 定義isLogin來紀錄使用者是否登入
  const [isLogin, setIsLogin] = useState(false)
  // 定義totalBalance來儲存目前使用者錢包金額
  const [totalBalance, setTotalBalance] = useState('-.--')
  // 從Redux取得memberInfo
  const memberInfo = useSelector(({ memberInfo }) => memberInfo)

  // 監控memberInfo，有資料的時候切換使用者的登入狀態
  useEffect(() => {
    // 如果Redux中的MemberInfo是空的，表示未登入
    checkIsObjectEmpty(memberInfo) ? setIsLogin(false) : setIsLogin(true)
  }, [memberInfo])

  // 監控使用者是否登入，是的話去取得使用者錢包金額
  useEffect(() => {
    // 紀錄元件是否加載中的變數
    let _isMounted = true

    if (isLogin) {
      // 取得getWallet AIP的Response
      !!memberInfo.loginName &&
        getWallet(memberInfo.loginName)
          .then(({ data }) => {
            if (!!data && data.code === 0) {
              // 取出分別中心錢包以及鎖定錢包的錢
              const { platformBalance, localBalance } = data.data
              // 加總之後即為首頁中錢包的顯示金額
              const total = parseFloat(localBalance) + parseFloat(platformBalance)
              // 將取得的金額設置到totalBalance
              if (_isMounted) setTotalBalance(moneyFix(total))
            } else {
              // TODO: Error handing
              dispatch(toastMsg(data.message))
            }
          })
          .finally(() => dispatch(loadingClose()))
    }

    return () => (_isMounted = false)
  }, [isLogin, dispatch, memberInfo.loginName])

  if (!isLogin) {
    return (
      <S.MemberInfoUnLoggedIn onClick={() => history.push(REGISTER)}>
        <h5>您还未登录</h5>
        <span>请先登录/注册后查看</span>
      </S.MemberInfoUnLoggedIn>
    )
  }

  return (
    <S.MemberInfoLoggedIn>
      <S.MemberUserName level={memberInfo.starLevel}>{memberInfo.loginName}</S.MemberUserName>
      <S.MemberAccountBalanceContainer>
        <S.MemberAccountBalance>{totalBalance ? totalBalance : '-.--'}</S.MemberAccountBalance>
      </S.MemberAccountBalanceContainer>
    </S.MemberInfoLoggedIn>
  )
}

export default MemberInfo

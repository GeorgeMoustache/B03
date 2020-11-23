import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Constants
import { LOGIN } from '@router/links'
// components
import { StyleSubmit } from './styles'
// api
import { resetPassword } from '@api'
// actions
import { loadingClose, toastMsg } from '@actions'
import { useHistory } from 'react-router'
//Utils
import { checkIsObjectEmpty } from '@utils'

const md5 = require('md5')

const SubmitButton = ({ params: { loginName, phoneNo, verificationCode, passWord, repeatPassWord } }) => {
  const memberInfo = useSelector(({ memberInfo }) => memberInfo)
  const history = useHistory()
  const dispatch = useDispatch()
  const [disabled, setDisabled] = useState(true)

  // 送出資料
  const handleSubmit = () => {
    // 驗證欄位格式
    if (loginName.length < 6 || loginName.length > 10) return dispatch(toastMsg('用户名不足6个或超过10个的英数组合')) // 長度不符合
    if (!/^[a-zA-Z]/.test(loginName)) return dispatch(toastMsg('用户名首位只可输入英文')) // 首位英文
    if (!/^[0-9a-zA-Z]+$/.test(loginName))
      return dispatch(toastMsg('您输入用户名的字元不符(可能含有全形或特殊字元或空格)')) // 含有特殊字元
    if (passWord.length < 8 || passWord.length > 12) return dispatch(toastMsg('密码不足8个或超过12个的英数组合')) // 位數不足
    if (!(/[0-9]/.test(passWord) && /[a-zA-Z]/.test(passWord)))
      return dispatch(toastMsg('密码需使用英文与数字组合的密码')) // 需包含英數
    if (!/^[0-9a-zA-Z]+$/.test(passWord))
      return dispatch(toastMsg('您输入密码的字元不符(可能含有全形或特殊字元或空格)')) // 含有特殊字元
    if (passWord !== repeatPassWord) return dispatch(toastMsg('两次密码输入不一致')) // 密碼不一致

    resetPassword(loginName, phoneNo, verificationCode, md5(passWord), md5(repeatPassWord))
      .then(res => {
        const { code, message } = res.data
        if (code !== 0) return dispatch(toastMsg(message))

        const isLogin = !checkIsObjectEmpty(memberInfo)
        dispatch(toastMsg(message))

        // 如果在設置/修改密碼時，成功修改導向上一頁；如果在登入/忘記密碼，成功修改導向登入頁
        isLogin
          ? history.goBack()
          : history.push({
              pathname: LOGIN,
              search: 'logout',
            })
      })
      .finally(() => dispatch(loadingClose()))
  }

  useEffect(() => {
    loginName && phoneNo && verificationCode && passWord && repeatPassWord ? setDisabled(false) : setDisabled(true)
  }, [loginName, phoneNo, verificationCode, passWord, repeatPassWord])

  return (
    <StyleSubmit>
      <button disabled={disabled} onClick={handleSubmit}>
        送出
      </button>
    </StyleSubmit>
  )
}

export default SubmitButton

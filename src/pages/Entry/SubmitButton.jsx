import React, { useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import * as routes from '@router/links'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// context
import { EntryContext } from './EntryContext'
// api
import { loginAccount, loginSMS, sendRegister } from '@api'
// actions
import { loadingClose, memberInfo, toastMsg } from '@actions'

const md5 = require('md5')

const StyleSubmitButton = styled.button`
  display: block;
  width: 100%;
  background: linear-gradient(90deg, #dccab8, #d2b496);
  border-radius: 25px;
  font-size: 15px;
  color: #fff;
  line-height: 45px;
  &[disabled] {
    color: #414655;
    opacity: 0.4;
  }
`

const SubmitButton = ({ text }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { entryType, loginType, login, register, sliderVerify } = useContext(EntryContext)
  const [disabled, setDisabled] = useState(true)

  // 送出表單
  const handleSubmit = () => {
    const {
      params: {
        account: { username, password },
        phone: { phoneNo, verificationCode },
      },
      checkPassword,
    } = login
    const {
      params: { loginName, passWord, rePassWord, recommendCode },
    } = register
    //登入
    if (entryType === 0) {
      //帳號
      if (loginType === 0) {
        loginAccount(username, md5(password))
          .then(res => {
            const { code, message, data } = res.data
            if (code !== 0) return dispatch(toastMsg(message))

            //登入成功後如果記住密碼有開啟就把帳密寫入 localStorage
            if (checkPassword) {
              localStorage.setItem('loginAccount', btoa(username))
              localStorage.setItem('loginPassword', btoa(password))
            }

            //存入 localStorage
            localStorage.setItem('memberInfo', JSON.stringify(data))
            localStorage.setItem('token', data.token)

            //存入 redux
            dispatch(memberInfo(data))

            //導向首頁
            history.push(routes.HOME)
          })
          .finally(() => dispatch(loadingClose()))
        return
      }

      //手機
      if (loginType === 1) {
        loginSMS(phoneNo, verificationCode)
          .then(res => {
            const { code, message, data } = res.data
            if (code !== 0) return dispatch(toastMsg(message))

            //存入 localStorage
            localStorage.setItem('memberInfo', JSON.stringify(data))
            localStorage.setItem('token', data.token)

            //存入 redux
            dispatch(memberInfo(data))

            //導向首頁
            history.push(routes.HOME)
          })
          .finally(() => dispatch(loadingClose()))
      }
      return
    }

    //註冊
    if (entryType === 1) {
      //驗證欄位格式
      if (loginName.length < 6 || loginName.length > 10) return dispatch(toastMsg('用户名不足6个或超过10个的英数组合')) //長度不符合
      if (!/^[a-zA-Z]/.test(loginName)) return dispatch(toastMsg('用户名首位只可输入英文')) //首位英文
      if (!/^[0-9a-zA-Z]+$/.test(loginName))
        return dispatch(toastMsg('您输入用户名的字元不符(可能含有全形或特殊字元或空格)')) //含有特殊字元

      if (passWord.length < 8 || passWord.length > 12) return dispatch(toastMsg('密码不足8个或超过12个的英数组合')) //位數不足
      if (!(/[0-9]/.test(passWord) && /[a-zA-Z]/.test(passWord)))
        return dispatch(toastMsg('密码需使用英文与数字组合的密码')) //需包含英數
      if (!/^[0-9a-zA-Z]+$/.test(passWord))
        return dispatch(toastMsg('您输入密码的字元不符(可能含有全形或特殊字元或空格)')) //含有特殊字元
      if (passWord !== rePassWord) return dispatch(toastMsg('两次密码输入不一致')) //密碼不一致

      sendRegister(loginName, md5(passWord), recommendCode)
        .then(res => {
          const { code, message, data } = res.data
          if (code !== 0) return dispatch(toastMsg(message))

          //存入 localStorage
          localStorage.setItem('memberInfo', JSON.stringify(data))
          localStorage.setItem('token', data.token)

          //存入 redux
          dispatch(memberInfo(data))

          //導向首頁
          history.push(routes.HOME)
        })
        .catch(() => {
          dispatch(toastMsg('后端系统错误'))
        })
        .finally(() => dispatch(loadingClose()))
    }
  }

  // 判斷是否啟用送出按鈕
  useEffect(() => {
    const {
      params: {
        account: { username, password },
        phone: { phoneNo, verificationCode },
      },
    } = login
    const {
      params: { loginName, passWord, rePassWord },
      checkTerms,
    } = register
    const { hasOpen, pass } = sliderVerify

    //登入
    if (entryType === 0) {
      //帳號登入
      if (loginType === 0) {
        username !== '' && password !== '' ? setDisabled(false) : setDisabled(true)
      }

      //手機登入
      if (loginType === 1) {
        phoneNo !== '' && verificationCode !== '' ? setDisabled(false) : setDisabled(true)
      }
    }

    //註冊
    if (entryType === 1) {
      if (hasOpen) {
        if (loginName !== '' && passWord !== '' && rePassWord !== '' && checkTerms && pass) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }
      } else {
        if (loginName !== '' && passWord !== '' && rePassWord !== '' && checkTerms) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }
      }
    }
  }, [entryType, loginType, login, register, sliderVerify])

  return (
    <StyleSubmitButton onClick={handleSubmit} disabled={disabled}>
      {text}
    </StyleSubmitButton>
  )
}

export default SubmitButton

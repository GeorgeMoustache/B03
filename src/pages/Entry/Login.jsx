import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { RESET_PASSWORD } from '@router/links'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// context
import { EntryContext } from './EntryContext'
// components
import FormItem from './FormItem'
import SubmitButton from './SubmitButton'
import ToggleButton from './ToggleButton'
import VerifyButton from '@components/VerifyButton/'
// assets
import iconArrow from '@assets/images/entry/icon_arrow.png'
import iconCheck from '@assets/images/entry/icon_check.png'
import iconLock from '@assets/images/entry/icon_lock.png'
import iconPhone from '@assets/images/entry/icon_phone.png'
import iconReg from '@assets/images/entry/button_reg.png'
import iconUser from '@assets/images/entry/icon_user.png'
import iconVerify from '@assets/images/entry/icon_verify.png'
// api
import { getVerifyCode } from '@api'
// actions
import { toastMsg, loadingClose } from '@actions'
// utils
import { filterMobileNumber, filterValidateCode } from '@utils'

const StyleLogin = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  width: calc(100vw - 40px);
  .wrap {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: rgba(255, 255, 255, 0.5);
    padding: 20px;
    .title {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      color: ${({ theme }) => theme.color.white};
      font-weight: bold;
      button {
        display: inline-flex;
        align-items: center;
        color: ${({ theme }) => theme.color.white};
        &::after {
          content: '';
          display: block;
          width: 7px;
          height: 10px;
          margin-left: 5px;
          background: url(${iconArrow}) center center no-repeat;
          background-size: 100% auto;
        }
      }
    }
    .form {
      .check-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        font-size: 12px;
        color: ${({ theme }) => theme.color.white};
        span {
          display: inline-flex;
          align-items: center;
          &::before {
            content: '';
            display: block;
            width: 14px;
            height: 14px;
            margin-right: 5px;
            border: 1px solid ${({ theme }) => theme.color.white};
            border-radius: 50%;
            box-sizing: border-box;
          }
          &.active::before {
            background: url(${iconCheck}) center center no-repeat transparent;
            background-size: 100% auto;
          }
        }
        button {
          font-size: 12px;
          color: ${({ theme }) => theme.color.white};
        }
      }
    }
  }
`

const Login = ({ handleInputType }) => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { loginType, setLoginType, login, setLogin } = useContext(EntryContext)

  // 登入方式選擇 (帳號 or 手機)
  const handleToggleType = () => setLoginType(loginType ? 0 : 1)

  // input 輸入事件
  const handleInputChange = event => {
    const { name, value } = event.target

    switch (name) {
      case 'loginUsername':
        setLogin({ ...login, params: { ...login.params, account: { ...login.params.account, username: value } } })
        break
      case 'loginPassword':
        setLogin({ ...login, params: { ...login.params, account: { ...login.params.account, password: value } } })
        break
      case 'loginPhone':
        setLogin({ ...login, params: { ...login.params, phone: { ...login.params.phone, phoneNo: filterMobileNumber(value) } } })
        break
      case 'loginVerify':
        setLogin({
          ...login,
          params: { ...login.params, phone: { ...login.params.phone, verificationCode: filterValidateCode(value) } },
        })
        break
      default:
    }
  }

  // 清除 input 內容
  const handleInputClear = name => {
    //帳號登入
    if (name === 'loginUsername')
      setLogin({ ...login, params: { ...login.params, account: { ...login.params.account, username: '' } } })
    //電話登入
    if (name === 'loginPhone')
      setLogin({ ...login, params: { ...login.params, phone: { ...login.params.phone, phoneNo: '' } } })
  }

  // 記住密碼
  const handleSavePassword = () => setLogin({ ...login, checkPassword: !login.checkPassword })

  // 獲取電話登入驗證碼
  const fetchVerifyCode = () => {
    const {
      params: {
        phone: { phoneNo },
      },
    } = login
    getVerifyCode(phoneNo, 0)
      .then(res => {
        const { code, message } = res.data
        if (code !== 0) dispatch(toastMsg(message))
        dispatch(toastMsg('验证码已发送'))
      })
      .catch(() => {
        dispatch(toastMsg('后端系统错误'))
      })
      .finally(() => dispatch(loadingClose()))
  }

  if (login) {
    const {
      params: {
        account: { username, password },
        phone: { phoneNo, verificationCode },
      },
      checkPassword,
    } = login

    return (
      <StyleLogin>
        <div className='wrap'>
          <div className='title'>
            {loginType ? '手机号登录' : '账密登录'}
            <button onClick={handleToggleType}>{loginType ? '账密登录' : '手机号登录'}</button>
          </div>
          <div className='form'>
            {/* 登入內容 */}
            {!loginType ? (
              <>
                <FormItem bgColor='rgba(0, 0, 0, 0.3)'>
                  <img src={iconUser} alt='loginUsername' />
                  <input
                    type='text'
                    name='loginUsername'
                    placeholder='用户名'
                    value={username}
                    onChange={handleInputChange}
                  />
                  {username ? (
                    <button className='control clear' onClick={() => handleInputClear('loginUsername')} />
                  ) : null}
                </FormItem>
                <FormItem bgColor='rgba(0, 0, 0, 0.3)'>
                  <img src={iconLock} alt='password' />
                  <input
                    id='loginPassword'
                    type='password'
                    name='loginPassword'
                    placeholder='密码'
                    value={password}
                    onChange={handleInputChange}
                  />
                  <button className='control eyes hide' onClick={evt => handleInputType(evt, 'loginPassword')} />
                </FormItem>
                <div className='check-item'>
                  <span onClick={handleSavePassword} className={checkPassword ? 'active' : ''}>
                    记住密码
                  </span>
                  <button onClick={()=> history.push(RESET_PASSWORD)}>忘记密码?</button>
                </div>
              </>
            ) : (
              <>
                <FormItem bgColor='rgba(0, 0, 0, 0.3)'>
                  <img src={iconPhone} alt='phoneNumber' />
                  <input
                    type='text'
                    name='loginPhone'
                    placeholder='手机号'
                    value={phoneNo}
                    onChange={handleInputChange}
                  />
                  {phoneNo ? <button className='control clear' onClick={() => handleInputClear('loginPhone')} /> : null}
                </FormItem>
                <FormItem bgColor='rgba(0, 0, 0, 0.3)'>
                  <img src={iconVerify} alt='verify' />
                  <input
                    type='text'
                    name='loginVerify'
                    placeholder='验证码'
                    value={verificationCode}
                    onChange={handleInputChange}
                    max='6'
                  />
                  <span className='verify'>
                    <VerifyButton theme='large' phoneNo={phoneNo} handleRequest={fetchVerifyCode} />
                  </span>
                </FormItem>
              </>
            )}
          </div>
          <SubmitButton text='登录' />
        </div>
        <ToggleButton icon={iconReg} text='注册新用户' bgColor='rgba(0, 0, 0, 0.4)' />
      </StyleLogin>
    )
  } else {
    return null
  }
}

export default Login

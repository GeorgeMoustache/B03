import React, { useContext } from 'react'
import styled from 'styled-components'
// context
import { EntryContext } from './EntryContext'
// components
import FormItem from './FormItem'
import SubmitButton from './SubmitButton'
import ToggleButton from './ToggleButton'
// assets
import iconCheck from '@assets/images/entry/icon_check.png'
import iconLock from '@assets/images/entry/icon_lock.png'
import iconLogin from '@assets/images/entry/button_login.png'
import iconSliderNormal from '@assets/images/entry/icon_slider_normal.png'
import iconSliderSuccess from '@assets/images/entry/icon_slider_success.png'
import iconUser from '@assets/images/entry/icon_user.png'

const StyleRegister = styled.div`
  flex-shrink: 0;
  display: flex;
  width: calc(100vw - 40px);
  .content {
    flex-grow: 1;
    padding: 20px;
    background: rgba(0, 0, 0, 0.4);
    .title {
      margin-bottom: 30px;
      font-size: 18px;
      color: ${({ theme }) => theme.color.white};
      font-weight: bold;
      text-align: center;
    }
    .verify-button {
      display: flex;
      align-items: center;
      width: 100%;
      margin-bottom: 10px;
      padding: 0 15px;
      background: hsla(0, 0%, 100%, 0.2);
      border-radius: 25px;
      font-size: 12px;
      color: #fff;
      line-height: 45px;
      &.success {
        background: #eefff5;
        color: #414655;
      }
      img {
        display: block;
        width: 18px;
        height: auto;
        margin-right: 10px;
      }
    }
    .check-item {
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      font-size: 12px;
      color: #fff;
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
        display: inline-block;
        margin: 0 3px;
        font-size: 12px;
        color: #d2b79c;
        text-decoration: underline;
      }
    }
  }
`

const Register = ({ handleInputType }) => {
  const { register, setRegister, sliderVerify, setSliderVerify, terms, setTerms } = useContext(EntryContext)

  // input 輸入事件
  const handleInputChange = event => {
    const { name, value } = event.target

    switch (name) {
      case 'regUsername':
        setRegister({ ...register, params: { ...register.params, loginName: value } })
        break
      case 'regPassword':
        setRegister({ ...register, params: { ...register.params, passWord: value } })
        break
      case 'regRePassword':
        setRegister({ ...register, params: { ...register.params, rePassWord: value } })
        break
      default:
    }
  }

  // 清除 input 內容
  const handleInputClear = () => setRegister({ ...register, params: { ...register.params, loginName: '' } })

  // 同意條款
  const handleToggleTerms = () => setRegister({ ...register, checkTerms: !register.checkTerms })

  // 開啟條款彈窗
  const handleOpenTerms = (title, type) => setTerms({ enabled: true, title, type })

  // 開啟滑塊驗證
  const handleOpenVerify = () => {
    if (!sliderVerify.pass) setSliderVerify({ ...sliderVerify, enabled: true })
  }

  if (register && sliderVerify && terms) {
    const {
      params: { loginName, passWord, rePassWord },
      checkTerms,
    } = register
    const { hasOpen, pass } = sliderVerify
    
    return (
      <StyleRegister>
        <ToggleButton icon={iconLogin} text='返回登录' bgColor='rgba(255, 255, 255, 0.5)' />
        <div className='content'>
          <div className='title'>注册</div>
          <FormItem hint={'6-10位英数组合,首位不为数字'} bgColor='hsla(0,0%,100%,.2)'>
            <img src={iconUser} alt='regUsername' />
            <input type='text' name='regUsername' placeholder='用户名' value={loginName} onChange={handleInputChange} />
            {loginName ? <button className='control clear' onClick={handleInputClear} /> : null}
          </FormItem>
          <FormItem hint={'8-12位大小写英数组合'} bgColor='hsla(0,0%,100%,.2)'>
            <img src={iconLock} alt='regPassword' />
            <input
              type='password'
              id='regPassword'
              name='regPassword'
              placeholder='密码'
              value={passWord}
              onChange={handleInputChange}
            />
            <button className='control eyes hide' onClick={evt => handleInputType(evt, 'regPassword')} />
          </FormItem>
          <FormItem hint={'请再次输入相同密码'} bgColor='hsla(0,0%,100%,.2)'>
            <img src={iconLock} alt='rePassword' />
            <input
              type='password'
              id='regRePassword'
              name='regRePassword'
              placeholder='确认密码'
              value={rePassWord}
              onChange={handleInputChange}
            />
            <button className='control eyes hide' onClick={evt => handleInputType(evt, 'regRePassword')} />
          </FormItem>
          {hasOpen ? (
            <button className={`verify-button ${pass ? 'success' : ''}`} onClick={handleOpenVerify} disabled={pass}>
              <img src={pass ? iconSliderSuccess : iconSliderNormal} alt='sliderIcon' />
              {pass ? '验证成功' : '点击进行验证'}
            </button>
          ) : null}
          <div className='check-item'>
            <span onClick={handleToggleTerms} className={checkTerms ? 'active' : ''}>
              我已阅读并同意
            </span>
            <button onClick={() => handleOpenTerms('相关条款', 'terms')}>相关条款</button>和
            <button onClick={() => handleOpenTerms('隐私政策', 'privacy')}>隐私政策</button>
          </div>
          <SubmitButton text='注册' />
        </div>
      </StyleRegister>
    )
  } else {
    return null
  }
}

export default Register

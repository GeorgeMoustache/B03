import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// actions
import { toastMsg } from '@actions'

const StyleVerifyButton = styled.button`
  flex-shrink: 0;
  background: linear-gradient(to right, #dccab8, #d2b496);
  color: #fff;
  &.large {
    width: 110px;
    border-radius: 25px;
    font-size: 16px;
    line-height: 37px;
  }
  &.small {
    width: 98px;
    border-radius: 5px;
    font-size: 12px;
    line-height: 26px;
  }
  &[disabled] {
    color: #414655;
    opacity: 0.3;
  }
`

// 使用驗證碼按鈕需接受 propName 為 [theme] 來決定按鈕樣式主題，其值為 'large' || 'small'
const VerifyButton = ({ theme, phoneNo, handleRequest }) => {
  const dispatch = useDispatch()
  const [time, setTime] = useState(0)
  const [disabled, setDisabled] = useState(true)
  const [cachePhoneNo, setCachePhoneNo] = useState('')

  const handleVerify = () => {
    if (!/^1[3456789]\d{9}$/.test(phoneNo))
      return dispatch(toastMsg('您输入的电话格式有误,请确认开头为1并且11位全数字'))
    setCachePhoneNo(phoneNo)
    setDisabled(true)

    let countTime = 300 //倒數秒數
    setTime(countTime)

    let interval = setInterval(() => {
      countTime -= 1
      setTime(countTime)
      if (countTime === 0) {
        clearInterval(interval)
        setDisabled(false)
        setCachePhoneNo('')
      }
    }, 1000)

    //依頁面不同去發送對應驗證碼的 request
    handleRequest()
  }

  useEffect(() => {
    if (!phoneNo || phoneNo === '') {
      setDisabled(true)
    } else {
      if (cachePhoneNo) {
        setDisabled(true)
      } else {
        setDisabled(false)
      }
    }
  }, [phoneNo, cachePhoneNo])

  return (
    <StyleVerifyButton className={theme} onClick={handleVerify} disabled={disabled}>
      {time === 0 ? '获取验证码' : `重发(${time})`}
    </StyleVerifyButton>
  )
}

export default VerifyButton

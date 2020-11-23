import React, { useEffect, useState } from 'react'
// components
import { StyleBankConnect, StyleSection } from './styles'
// utils
import moment from 'moment'

const BankConnect = () => {
  const [time, setTime] = useState(0)
  
  useEffect(()=>{
    let countTime = 1200000 //倒數秒數
    setTime(countTime)

    setInterval(() => {
      countTime -= 1000
      setTime(countTime)
      if (countTime === 0) {
        window.location.reload()
      }
    }, 1000)
  },[])

  return (
    <StyleSection>
      <StyleBankConnect>
        <dl>
          <dt>正在与银行通讯...</dt>
          <dd>
            <p>成功付款后将自动到帐，并弹出到帐提示</p>
            <p>长时间无反应，请与客服联系</p>
          </dd>
        </dl>
        <div className='time'>{moment(time).format('mm:ss')}</div>
      </StyleBankConnect>
    </StyleSection>
  )
}

export default BankConnect

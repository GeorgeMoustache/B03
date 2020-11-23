import React, { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
// context
import { DepositContext } from './DepositContext'
// components
import { StylePayment, StyleSection, StyleSubTitle } from './styles'

const Payment = () => {
  const { portalCdn } = useSelector(state => state.config)
  const { paymentList, setPaymentItem, setBankItem, setQuickMoneyIdx, params, setParams, onlinePayStatus } = useContext(DepositContext)
  const [payTypeIdx, setPayTypeIdx] = useState(0)

  // 切換支付方式重置各項參數
  const handleSetItem = (item, idx) => () => {
    setPayTypeIdx(idx)
    setPaymentItem(item)
    setBankItem(null)
    setQuickMoneyIdx()
    setParams({ ...params, payType:item.payTypeId, merId: item.merId, amount: '', bankCode: null, depositor: '' })
  }

  return (
    <StyleSection>
      <StyleSubTitle>支付方式</StyleSubTitle>
        <StylePayment>
          { paymentList && paymentList.map((item, idx) => {
            return (
              <button className={idx === payTypeIdx ? 'active' : ''} onClick={handleSetItem(item, idx)} key={idx} disabled={onlinePayStatus}>
                <img src={portalCdn + item.payTypeLogoImgUrl} alt={item.payTypeName} />
                {item.payTypeName}
              </button>
            )
          })}
        </StylePayment>
    </StyleSection>
  )
}

export default Payment

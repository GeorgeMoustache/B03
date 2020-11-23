import React, { useContext, useEffect } from 'react'
// context
import { DepositContext } from './DepositContext'
// constants
import { BANK_CARDS } from '@constants/pickerTypes'
// components
import {
  StyleBankSelector,
  StyleNote,
  StylePayName,
  StylePrice,
  StyleQuickMoney,
  StyleSection,
  StyleSubTitle,
} from './styles'
import Picker from '@components/Picker/'
import SubmitButton from './SubmitButton'

const PayInfo = () => {
  const {
    paymentItem,
    bankItem,
    setBankItem,
    quickMoney,
    quickMoneyIdx,
    setQuickMoneyIdx,
    params,
    setParams,
  } = useContext(DepositContext)

  // 對應支付方式顯示模板
  const payTemplate = () => {
    // 取得模板類別
    let type = 0 // 0:掃碼類，只顯示金額; 1:銀行類，顯示銀行加金額; 2:轉帳類，顯示姓名加金額
    if (paymentItem) {
      if (
        paymentItem.payTypeCode.indexOf('QR') !== -1 ||
        paymentItem.payTypeCode.indexOf('APP') !== -1 ||
        paymentItem.payTypeCode.indexOf('H5') !== -1
      ) {
        type = 0
      } else if (paymentItem.payTypeCode.indexOf('BANK') !== -1) {
        type = 1
      } else {
        type = 2
      }
    }

    // 依照模版類別顯示對應模版
    switch (type) {
      // 不顯示
      case 0:
        return null
      // 顯示銀行
      case 1:
        return (
          <Picker type={BANK_CARDS} setSelectedData={setBankItem} initialIndex={!bankItem ? undefined : -1}>
            {bankComponent()}
          </Picker>
        )
      // 顯示存款人姓名
      case 2:
        return (
          <StylePayName>
            <div className='title'>存款人姓名</div>
            <input type='text' name='name' placeholder='请输入存款人姓名' onChange={handleInputChange} />
            <StyleNote>＊为及时到账，请务必输入正确的汇款人姓名</StyleNote>
          </StylePayName>
        )
      // 預設不顯示
      default:
        return null
    }
  }

  // 選擇銀行元件
  const bankComponent = () => () => {
    return (
      <StyleBankSelector>
        <div className='title'>银行</div>
        <button className={bankItem && 'active'}>{bankItem ? bankItem.bankName : '请选择银行'}</button>
      </StyleBankSelector>
    )
  }

  // 快捷金額輸入
  const handleQuickMoney = (item, idx) => () => {
    setQuickMoneyIdx(idx)
    setParams({ ...params, amount: item })
  }

  // input 輸入
  const handleInputChange = evt => {
    const { name, value } = evt.target
    if (name === 'name') setParams({ ...params, depositor: value })
    if (name === 'money') {
      if (quickMoneyIdx !== null) setQuickMoneyIdx(null)
      quickMoney.find((item, idx) => {
        if (item === value) setQuickMoneyIdx(idx)
        return null
      })
      setParams({ ...params, amount: value })
    }
  }

  useEffect(() => {
    setParams && setParams(prevState => ({ ...prevState, bankCode: bankItem ? bankItem.bankCode : null }))
  }, [bankItem, setParams])

  return (
    <>
      {payTemplate()}
      <StyleSection>
        <StyleSubTitle>存款金额</StyleSubTitle>
        <StyleQuickMoney>
          {quickMoney &&
            quickMoney.map((item, idx) => {
              return (
                <button
                  className={idx === quickMoneyIdx ? 'active' : ''}
                  onClick={handleQuickMoney(item, idx)}
                  key={idx}
                >
                  ¥ {item}
                </button>
              )
            })}
        </StyleQuickMoney>
        <StylePrice>
          {params && paymentItem && (
            <input
              type='number'
              name='money'
              placeholder={`请输入自訂存款金额，范围：${paymentItem.singleMinAmount}~${paymentItem.singleMaxAmount}元`}
              value={params.amount}
              onChange={handleInputChange}
            />
          )}
        </StylePrice>
        <StyleNote>＊充值金额为整百，可能会影响到帐，建议金额调整金额尾数（如：1004、2003、 5006等）</StyleNote>
      </StyleSection>
      <SubmitButton />
    </>
  )
}

export default PayInfo

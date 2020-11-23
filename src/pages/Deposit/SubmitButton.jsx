import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// context
import { DepositContext } from './DepositContext'
// components
import { StyleSubmit } from './styles'
import Dialog from '@components/Dialog/'
// api
import { createOrder } from '@api'
import { headers } from '@api/config'
// actions
import { loadingClose, toastMsg } from '@actions'
// utils
import { handleAppLinkClick } from '@utils'

const SubmitButton = () => {
  const dispatch = useDispatch()
  const {
    paymentItem,
    params,
    disabled,
    setDisabled,
    setOfflinePayStatus,
    setOnlinePayStatus,
    setPayResult,
  } = useContext(DepositContext)
  const [dialogEnabled, setDialogEnabled] = useState(false)

  // 送出表單
  const handleSubmit = () => {
    const { payTypeCode, singleMinAmount, singleMaxAmount } = paymentItem
    const { amount } = params

    // 驗證金額範圍
    if (amount < singleMinAmount || amount > singleMaxAmount)
      return dispatch(toastMsg('输入的金额请介于最小与最大值之间'))

    // 線下支付需開啟 dialog 後傳送
    if (payTypeCode === 'BQ') return setDialogEnabled(true)

    // 線上支付送出
    createOrder(params)
      .then(res => {
        const { code, message, data } = res.data
        if (code !== 0) return dispatch(toastMsg(message))
        const { payUrl, orderNo, merId, bankCode } = data
        const token = localStorage.getItem('token')
        const { appKey, deviceId } = headers
        const url = `${payUrl}?orderNo=${orderNo}&merId=${merId}&bankCode=${bankCode}&token=${token}&appKey=${appKey}&accessMode=H5&deviceId=${deviceId}`

        setOnlinePayStatus(1)
        handleAppLinkClick(url)
      })
      .finally(() => dispatch(loadingClose()))
  }

  // 線下支付彈窗確認
  const handleConfirm = () => {
    setDialogEnabled(false)
    createOrder(params)
      .then(res => {
        const { code, message, data } = res.data
        if (code !== 0) return dispatch(toastMsg(message))
        setOfflinePayStatus(1)
        setPayResult(data)
      })
      .finally(() => dispatch(loadingClose()))
  }

  // 驗證欄位以開啟送出按鈕
  useEffect(() => {
    let type = 0 // 0:掃碼類，只驗證金額; 1:銀行類，驗證銀行加金額; 2:轉帳類，驗證姓名加金額

    if (paymentItem && params) {
      const { payTypeCode } = paymentItem
      const { amount, depositor, bankCode } = params

      // 取得驗證欄位的類型 0:掃碼類，只驗證金額; 1:銀行類，驗證銀行加金額; 2:轉帳類，驗證姓名加金額
      if (
        payTypeCode.indexOf('QR') !== -1 ||
        payTypeCode.indexOf('APP') !== -1 ||
        payTypeCode.indexOf('H5') !== -1
      ) {
        type = 0
      } else if (payTypeCode.indexOf('BANK') !== -1) {
        type = 1
      } else {
        type = 2
      }

      if (amount !== '') {
        if (type === 2 && depositor !== '') {
          setDisabled(false)
        } else if (type === 1 && bankCode) {
          setDisabled(false)
        } else if (type === 0) {
          setDisabled(false)
        } else {
          setDisabled(true)
        }
      } else {
        setDisabled(true)
      }
    }
  }, [paymentItem, params, setDisabled])

  return (
    <>
      <StyleSubmit>
        <button disabled={disabled} onClick={handleSubmit}>
          立即存款
        </button>
      </StyleSubmit>
      {dialogEnabled && (
        <Dialog
          title='温馨提醒'
          content='我司银行卡不定期更换，请按每次提交订单匹配的银行卡转账，切勿直接转帐至历史银行卡，否则无法到帐。概不负责'
          extraButtons={{ title: '我知道了', handleClick: handleConfirm }}
        />
      )}
    </>
  )
}

export default SubmitButton

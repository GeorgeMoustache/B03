import React, { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// api
import { getPayConfig } from '@api'
// actions
import { loadingClose, toastMsg } from '@actions'

export const DepositContext = createContext({})

const DepositContextProvider = ({ children }) => {
  const dispatch = useDispatch()
  const { loginName, starLevel, creditLevel } = useSelector(state => state.memberInfo)
  const [contextValue, setContextValue] = useState({})
  const [paymentList, setPaymentList] = useState()
  const [paymentItem, setPaymentItem] = useState()
  const [bankItem, setBankItem] = useState(null)
  const [quickMoney, setQuickMoney] = useState()
  const [quickMoneyIdx, setQuickMoneyIdx] = useState()
  const [params, setParams] = useState({
    payType: null, // payTypeId
    merId: null,
    amount: '',
    clientType: 2,
    userName: loginName,
    starLevel,
    creditLevel,
    bankCode: null,
    depositor: '', // payTypeCode === 'BQ' 才帶
  })
  const [disabled, setDisabled] = useState(true)
  const [offlinePayStatus, setOfflinePayStatus] = useState(0) // 線下支付狀態 0:未支付; 1:支付完成
  const [onlinePayStatus, setOnlinePayStatus] = useState(0) // 線上支付狀態 0:未支付; 1:支付完成
  // 線下支付結果資料
  const [payResult, setPayResult] = useState(null)

  useEffect(() => {
    getPayConfig(loginName)
      .then(res => {
        const { code, message, data } = res.data
        if (code !== 0) return dispatch(toastMsg(message))

        let paymentList = data.merchantList
        let paymentItem = paymentList[0]
        setPaymentList(paymentList)

        // 預設選取第一個支付方式
        setPaymentItem(paymentItem)
        setParams(prevState => ({ ...prevState, payType: paymentItem.payTypeId, merId: paymentItem.merId }))

        let moneyList = data.quickSelectAmountList.split(',')
        setQuickMoney(moneyList)
      })
      .finally(() => dispatch(loadingClose()))
  }, [dispatch, loginName])

  useEffect(() => {
    setContextValue({
      paymentList,
      paymentItem,
      setPaymentItem,
      bankItem,
      setBankItem,
      quickMoney,
      quickMoneyIdx,
      setQuickMoneyIdx,
      params,
      setParams,
      disabled,
      setDisabled,
      offlinePayStatus,
      setOfflinePayStatus,
      onlinePayStatus,
      setOnlinePayStatus,
      payResult,
      setPayResult,
    })
  }, [
    paymentList,
    paymentItem,
    setPaymentItem,
    bankItem,
    setBankItem,
    quickMoney,
    quickMoneyIdx,
    setQuickMoneyIdx,
    params,
    setParams,
    disabled,
    setDisabled,
    offlinePayStatus,
    setOfflinePayStatus,
    onlinePayStatus,
    setOnlinePayStatus,
    payResult,
    setPayResult,
  ])

  return <DepositContext.Provider value={contextValue}>{children}</DepositContext.Provider>
}

export default DepositContextProvider

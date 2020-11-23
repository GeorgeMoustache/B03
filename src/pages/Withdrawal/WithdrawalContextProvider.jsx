import React, { createContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// APIs
import { getBankcardList } from '@api'
// Actions
import { loadingClose } from '@actions'

export const WithdrawalContext = createContext()

const WithdrawalContextProvider = ({ children }) => {
  const dispatch = useDispatch()
  const memberInfo = useSelector(({ memberInfo }) => memberInfo)
  // 用戶目前的銀行卡列表
  const [myBankCards, setMyBankCards] = useState([])
  // 被選擇銀行卡的Index
  const [selectedBankCardIndex, setSelectedBankCardIndex] = useState(0)

  // 載入的時候，取得使用者開戶銀行列表，將其記錄在State中
  useEffect(() => {
    // [API]取得用戶目前銀行卡列表
    getBankcardList(memberInfo.userId)
      .then(({ data }) => {
        // 如果成功，將資料存入myBankCards的State中
        if (data.code === 0) {
          setMyBankCards(data.data)
        } else {
          // TODO: Error handling
        }
      })
      .finally(() => dispatch(loadingClose()))
  }, [memberInfo.userId, dispatch])

  return (
    <WithdrawalContext.Provider value={{ myBankCards, selectedBankCardIndex, setSelectedBankCardIndex }}>
      {children}
    </WithdrawalContext.Provider>
  )
}

export default WithdrawalContextProvider

import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Components
import * as S from './style'
// APIs
import { getWallet, walletRecycle } from '@api'
// Actions
import { loadingClose, toastMsg } from '@actions'
// Utils
import { checkIsObjectEmpty, moneyFix } from '@utils'

const WalletManagement = () => {
  const dispatch = useDispatch()
  // 取得Redux中的MemberInfo
  const memberInfo = useSelector(({ memberInfo }) => memberInfo)
  // 中心錢包
  const [localBalace, setLocalBalance] = useState('-.--')
  // 鎖定錢包
  const [platformBalace, setPlatformBalance] = useState('-.--')
  // 各場館錢包列表
  const [platformBalanceList, setPlatformBalanceList] = useState([])
  // 是否收合
  const [isExpand, setIsExpand] = useState(false)

  // 取得錢包資料
  const handleGetWalletData = useCallback(() => {
    const isLogin = !checkIsObjectEmpty(memberInfo)

    if (isLogin && 'loginName' in memberInfo) {
      getWallet(memberInfo.loginName)
        .then(({ data }) => {
          if (!!data && data.code === 0) {
            const {
              localBalance, // 中心錢包
              platformBalance, // 鎖定錢包
              platformList, // 各場館錢包列表
            } = data.data

            setLocalBalance(moneyFix(localBalance))
            setPlatformBalance(moneyFix(platformBalance))
            setPlatformBalanceList(platformList)
          } else {
            // TODO: Error Handling
          }
        })
        .finally(() => dispatch(loadingClose()))
    }
  }, [memberInfo, dispatch])

  // 處理一鍵回收
  const handleWalletRecycle = () => {
    walletRecycle()
      .then(({ data: { message } }) => {
        dispatch(toastMsg(!!message ? message : '回收失败'))
      })
      .then(() => handleGetWalletData())
      .finally(() => dispatch(loadingClose()))
  }

  const handleToggleExpand = () => {
    setIsExpand(prevState => !prevState)
  }

  useEffect(() => {
    handleGetWalletData()
  }, [handleGetWalletData])

  const renderPlatformBalanceItems = items => {
    return items.map(({ platformCode, platformName, balance }) => (
      <S.WalletItem key={platformCode}>
        <S.WalletItemTitle>{platformName}</S.WalletItemTitle>
        <S.WalletItemDescription>{moneyFix(balance)}</S.WalletItemDescription>
      </S.WalletItem>
    ))
  }

  const renderPlatformBalanceData = () => {
    // 將API拿到的platformBalanceList中的Item，四個分一組
    const listDividedByFour = []
    // 總共會有橫列，因為不滿四個也要分一組，所以無條件進入
    const howManyRows = isExpand ? Math.ceil(platformBalanceList.length / 4) : 1

    for (let i = 0; i < howManyRows; i++) {
      listDividedByFour.push(platformBalanceList.slice(4 * i, 4 * i + 4))
    }

    return listDividedByFour.map((items, index) => <S.Row key={index}>{renderPlatformBalanceItems(items)}</S.Row>)
  }

  return (
    <S.Container>
      <S.WalletActions>
        <S.WalletReloadButton onClick={handleGetWalletData}>钱包金额</S.WalletReloadButton>
        <S.WalletRecycleButton onClick={handleWalletRecycle}>一键回收</S.WalletRecycleButton>
      </S.WalletActions>
      <S.WalletMainContent>
        <S.Row>
          <S.WalletSummaryItem>
            <S.WalletSummaryItemTitle>中心钱包</S.WalletSummaryItemTitle>
            <S.WalletSummaryItemDescription>{localBalace}</S.WalletSummaryItemDescription>
          </S.WalletSummaryItem>
          <S.WalletSummaryItem>
            <S.WalletSummaryItemTitle>锁定钱包</S.WalletSummaryItemTitle>
            <S.WalletSummaryItemDescription>{platformBalace}</S.WalletSummaryItemDescription>
          </S.WalletSummaryItem>
        </S.Row>
        {renderPlatformBalanceData()}
      </S.WalletMainContent>
      <S.WalletExpandButtonContainer onClick={handleToggleExpand}>
        <S.WalletExpandButton isExpand={isExpand}>{isExpand ? '收起所有场馆' : '顯示所有场馆'}</S.WalletExpandButton>
      </S.WalletExpandButtonContainer>
    </S.Container>
  )
}

export default WalletManagement

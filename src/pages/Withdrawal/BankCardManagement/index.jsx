import React, { Fragment, useContext } from 'react'
import { useHistory } from 'react-router'
import { useSelector } from 'react-redux'
// Contexts
import { WithdrawalContext } from '../WithdrawalContextProvider'
// Constants
import { ADD_BANKCARD } from '@router/links'
// Components
import * as S from './style'

const BANKCARD_MAX_LENGTH = 3

const BankCardManagement = () => {
  const history = useHistory()
  // 從Context取得用戶目前銀行卡
  const { myBankCards, selectedBankCardIndex, setSelectedBankCardIndex } = useContext(WithdrawalContext)
  // 從Redux取得圖片前綴的cdn位址
  const portalCdn = useSelector(({ config }) => config.portalCdn)
  // 被選擇銀行卡的Index
  // const [selectedIndex, setSelectedIndex] = useState(0)

  // 渲染用戶目前銀行卡列表
  const renderBankCardItems = () => {
    // 如果沒有銀行卡，不渲染
    if (myBankCards.length === 0) return null

    // 如果沒有含http，從Redux取得portalCdn，並放入連結前綴
    const getSrc = link => {
      return link.includes('http') ? link : `${portalCdn}${link}`
    }

    return myBankCards.map(({ bankId, bankName, logoUrl }, index) => {
      return (
        <S.BankCardItem key={index} onClick={() => setSelectedBankCardIndex(index)}>
          <S.BankCardIcon src={getSrc(logoUrl)} />
          <S.BankCardTitle>{bankName}</S.BankCardTitle>
          <S.BankCardRadioButton checked={selectedBankCardIndex === index} />
        </S.BankCardItem>
      )
    })
  }

  // 沒有銀行卡時的UI
  if (myBankCards.length === 0) {
    return (
      <Fragment>
        <S.BankCardManagement>
          <S.AddBankCardButton onClick={() => history.push(ADD_BANKCARD)}>添加银行卡</S.AddBankCardButton>
        </S.BankCardManagement>
        <S.Hint>＊请先绑定一张银行卡，用于收款</S.Hint>
      </Fragment>
    )
  }

  return (
    <Fragment>
      <S.BankCardManagement>
        <S.BankCardManagementTitle>收款银行</S.BankCardManagementTitle>
        {renderBankCardItems()}
        {myBankCards.length < BANKCARD_MAX_LENGTH && (
          <S.AddBankCardButton onClick={() => history.push(ADD_BANKCARD)}>添加银行卡</S.AddBankCardButton>
        )}
      </S.BankCardManagement>
    </Fragment>
  )
}

export default BankCardManagement

import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// constants
import { BACK, CUSTOMER } from '@constants/topBarButtonTypes'
import { ADD_BANKCARD } from '@router/links'
import { BANKCARD } from '@constants/encodedType'
// components
import * as S from './style'
import TopBar from '@components/TopBar'
// Assets
import AddBankCardImg from '@assets/images/cardManagement/icon__add-bank-card.png'
import EmptyStateImg from '@assets/images/cardManagement/icon__card-management_empty.png'
// APIs
import { getBankcardList } from '@api'
// Actions
import { loadingClose } from '@actions'
// Utils
import { encodedByType } from '@utils'

const CardManagement = () => {
  const dispatch = useDispatch()
  // 取得使用者userId，用來取得使用者銀行卡的參數使用
  const { userId } = useSelector(({ memberInfo }) => memberInfo)
  // 取得cdn路徑
  const { portalCdn } = useSelector(({ config }) => config)
  // 使用者銀行卡列表
  const [bankCardList, setBankCardList] = useState(null)

  useEffect(() => {
    getBankcardList(userId)
      .then(({ data }) => {
        if (data.code === 0) {
          const bankCardList = data.data
          setBankCardList(bankCardList)
        }
      })
      .finally(() => dispatch(loadingClose()))
  }, [dispatch, userId])

  if (!bankCardList) return null

  // 渲染銀行卡列表
  const renderCardList = () => {
    if (bankCardList.length === 0) return <S.EmptyState src={EmptyStateImg} />

    return (
      <section>
        {bankCardList.map(card => (
          <S.BankCardItem key={card.id}>
            <S.BankCardItemContent>
              <S.BankCardItemHeader>
                <S.BankCardItemLogo src={`${portalCdn}${card.logoUrl}`} alt='Bank logo' />
                <S.BankCardItemTitle>{card.bankName}</S.BankCardItemTitle>
              </S.BankCardItemHeader>
              <S.BankCardItemSubtitle>{encodedByType(BANKCARD, card.bankCardNumber, '＊')}</S.BankCardItemSubtitle>
            </S.BankCardItemContent>
          </S.BankCardItem>
        ))}
      </section>
    )
  }

  // 渲染新增銀行卡按鈕
  const renderAddBankCardButton = () => {
    if (bankCardList.length < 3) {
      return (
        <S.AddBankCardButton to={ADD_BANKCARD}>
          <img src={AddBankCardImg} alt='Add bankcard' />
          添加銀行卡
        </S.AddBankCardButton>
      )
    }
    return null
  }

  return (
    <S.Container>
      <TopBar title='银行卡管理' left={BACK} right={CUSTOMER} />
      <S.MainContent>
        {renderCardList()}
        {renderAddBankCardButton()}
        <S.Hint>
          {bankCardList.length < 3 && '最多支持添加3张银行卡'}
          <br />
          如需删除卡片，请联系客服
        </S.Hint>
      </S.MainContent>
    </S.Container>
  )
}

export default CardManagement

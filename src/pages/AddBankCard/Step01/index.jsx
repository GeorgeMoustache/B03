import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// Contexts
import { AddBankCardContext } from '../AddBankCardContextProvider'
// Constants
import * as encodedType from '@constants/encodedType'
// Components
import * as S from '../style'
import Picker from '@components/Picker'
import TopBar from '@components/TopBar'
import ContactCustomerService from '../ContactCustomerService'
// Actions
import { toastMsg } from '@actions'
import { BACK } from '@constants/topBarButtonTypes'
import { BANK_CARDS } from '@constants/pickerTypes'
// Utils
import { encodedByType, filterIntegerOnly } from '@utils'

const AddBankCard = () => {
  const dispatch = useDispatch()
  const { name, bankCardNumber, setBankCardNumber, bank, setBank, handleNextStep } = useContext(AddBankCardContext)
  // 「下一步」按鈕是否失效的State
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  // 控管「下一步」按鈕是否失效
  useEffect(() => {
    // 如果「持卡人姓名」以及「銀行卡號碼」都有填寫，就使得下一步按鈕可以被點擊
    if (!!name && bankCardNumber.length && !!bank) return setIsButtonDisabled(false)
    // 不然就將按鈕失效
    return setIsButtonDisabled(true)
  }, [name, bankCardNumber, bank])

  // 處理銀行卡編號輸入
  const handleBankCardNumberChange = e => {
    // 只允許純數字
    let inputValue = filterIntegerOnly(e.target.value)
    // 最多只能輸入19碼
    inputValue = inputValue.slice(0, 19)

    setBankCardNumber(inputValue)
  }

  // 處理「下一步」按鈕點擊事件
  const handleNextStepClick = () => {
    // 如果銀行卡號碼超出16-19範圍，顯示錯誤訊息
    if (bankCardNumber.length < 16 || bankCardNumber.length > 19) return dispatch(toastMsg('银行卡号长度为16-19位'))
    // 導到下一步
    handleNextStep()
  }

  // 處理銀行卡清除
  const handleBankCardNumberClear = () => {
    setBankCardNumber('')
  }

  return (
    <S.Container>
      <TopBar title='添加银行卡' left={BACK} />
      <S.MainContent>
        <section>
          <S.InputTitle>持卡人姓名</S.InputTitle>
          <S.TextInputContainer>
            <S.TextInput
              placeholder='请输入持卡人姓名，仅支持中文、英文、“.”'
              value={!!name ? encodedByType(encodedType.NAME, name) : ''}
              readOnly
            />
          </S.TextInputContainer>
          <S.Hint>＊为了您的资金能够迅速到账，请确保填写的姓名与银行卡的开户姓名一致</S.Hint>
        </section>
        <section>
          <S.InputTitle>所属银行</S.InputTitle>
          <Picker type={BANK_CARDS} setSelectedData={setBank}>
            {() => <S.Selector isSelected={!!bank}>{!!bank ? bank.bankName : '請選擇銀行'}</S.Selector>}
          </Picker>
          <S.InputTitle>银行卡号</S.InputTitle>
          <S.TextInputContainer>
            <S.TextInput
              type='tel'
              placeholder='请输入银行卡号'
              onChange={handleBankCardNumberChange}
              value={bankCardNumber}
            />
            {!!bankCardNumber && <S.TextInputClearButton onClick={handleBankCardNumberClear} />}
          </S.TextInputContainer>
          <S.Hint>＊请认真校对银行卡号，卡号错误资金将无法到账。</S.Hint>
        </section>
        <S.Button disabled={isButtonDisabled} onClick={handleNextStepClick}>
          下一步
        </S.Button>
        <ContactCustomerService />
      </S.MainContent>
    </S.Container>
  )
}

export default AddBankCard

import * as S from '../style'
import * as encodedType from '@constants/encodedType'

import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// Components
import TopBar from '@components/TopBar'
import VefifyButton from '@components/VerifyButton'
import LastStepButton from '../LastStepButton'
import { AddBankCardContext } from '../AddBankCardContextProvider'
import ContactCustomerService from '../ContactCustomerService'
// APIs
import { getBankcardVerifyCode } from '@api'
// Actions
import { toastMsg, loadingClose } from '@actions'
// Utils
import { encodedByType, isMobileFormatValid, filterValidateCode } from '@utils'

const AddBankCard = () => {
  const dispatch = useDispatch()
  const { phone, validateCode, setValidateCode, handleSaveBankCard } = useContext(AddBankCardContext)
  // 「下一步」按鈕是否失效的State
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  // 控管「下一步」按鈕是否失效
  useEffect(() => {
    // 如果「手機號碼」以及「驗證碼」都有填寫，就使得下一步按鈕可以被點擊
    if (!!phone && !!validateCode) return setIsButtonDisabled(false)

    return setIsButtonDisabled(true)
  }, [phone, validateCode])

  // 處理驗證碼輸入
  const handleValidateCodeChange = e => {
    const output = filterValidateCode(e.target.value)
    setValidateCode(output)
  }

  // 處理送出按鈕點擊
  const handleSubmit = () => {
    // 判斷手機號碼是否符合格式
    if (!isMobileFormatValid(phone)) return dispatch(toastMsg('手机号码格式不正确'))

    handleSaveBankCard()
  }

  // 處理取得驗證碼
  const handleVerifyCodeRequest = () => {
    if (!!phone) getBankcardVerifyCode(phone).finally(() => dispatch(loadingClose()))
  }

  return (
    <S.Container>
      <TopBar title='添加银行卡' left={LastStepButton} />
      <S.MainContent>
        <section>
          <S.InputTitle>手机号码</S.InputTitle>
          <S.TextInputContainer>
            <S.TextInput
              type='tel'
              placeholder='11位手机号码'
              value={!!phone ? encodedByType(encodedType.PHONE, phone) : ''}
              readOnly
            />
          </S.TextInputContainer>
          <S.InputTitle>验证码</S.InputTitle>
          <S.TextInputContainer>
            <S.TextInput
              type='tel'
              placeholder='请输入手机验证码'
              value={validateCode}
              onChange={handleValidateCodeChange}
            />
            <VefifyButton theme='small' phoneNo={phone} handleRequest={handleVerifyCodeRequest} />
          </S.TextInputContainer>
          <S.Hint>＊手机号码将有助于您找回账号，同时也是客服人员确认您身份的重要依据</S.Hint>
        </section>
        <S.Button disabled={isButtonDisabled} onClick={handleSubmit}>
          提交
        </S.Button>
        <ContactCustomerService />
      </S.MainContent>
    </S.Container>
  )
}

export default AddBankCard

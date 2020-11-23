import React, { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
// Components
import * as S from '../style'
import VefifyButton from '@components/VerifyButton'
// APIs
import { getVerifyCode } from '@api'
// Actions
import { updateMemberPhoneNo, toastMsg, loadingClose } from '@actions'
// Utils
import { filterValidateCode, filterMobileNumber, isMobileFormatValid } from '@utils'

const EditPhone = ({ handleEditProfileClose }) => {
  const dispatch = useDispatch()
  // 手機號碼
  const [phoneNo, setPhoneNo] = useState('')
  // 驗證碼
  const [validateCode, setValidateCode] = useState('')

  // 處理手機號碼輸入
  const handlePhoneChange = e => {
    const output = filterMobileNumber(e.target.value)
    setPhoneNo(output)
  }

  // 處理驗證碼輸入
  const handleValidateCodeChange = e => {
    const output = filterValidateCode(e.target.value)
    setValidateCode(output)
  }

  // 處理送出行為
  const handleSubmit = () => {
    // 如果有手機，但是不符合格式，顯示錯誤訊息
    if (!!phoneNo && !isMobileFormatValid(phoneNo)) return dispatch(toastMsg('手机号码格式不正确'))

    // 更新手機號碼
    dispatch(updateMemberPhoneNo(phoneNo, validateCode)).then(() => {
      // 清空手機號碼欄位
      setPhoneNo('')
      // 清空驗證碼欄位
      setValidateCode('')
      // 關閉編輯視窗
      handleEditProfileClose()
    })
  }

  // 處理取得驗證碼
  const handleValidateCodeRequest = () => {
    // 如果有手機，但是不符合格式，顯示錯誤訊息
    if (!!phoneNo && !isMobileFormatValid(phoneNo)) return dispatch(toastMsg('手机号码格式不正确'))
    // 如果手機符合格式，請求驗證碼，並關閉loading
    if (!!phoneNo) getVerifyCode(phoneNo, 5).finally(() => dispatch(loadingClose()))
  }

  return (
    <Fragment>
      <section>
        <S.ProfileInfoTitle>手机号码</S.ProfileInfoTitle>
        <S.ProfileInfoDetailContainer>
          <S.ProfileInfoDetail value={phoneNo} placeholder='请输入手机号' onChange={handlePhoneChange} />
        </S.ProfileInfoDetailContainer>
        <S.ProfileInfoTitle>获取验证码</S.ProfileInfoTitle>
        <S.ProfileInfoDetailContainer>
          <S.ProfileInfoDetail value={validateCode} placeholder='请输入验证码' onChange={handleValidateCodeChange} />
          <VefifyButton theme='small' phoneNo={phoneNo} handleRequest={handleValidateCodeRequest} />
        </S.ProfileInfoDetailContainer>
      </section>
      <S.SubmitButton disabled={!phoneNo || !validateCode} onClick={handleSubmit}>
        送出
      </S.SubmitButton>
    </Fragment>
  )
}

export default EditPhone

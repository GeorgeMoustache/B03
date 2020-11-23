import React, { createContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
// Constants
import { PROFILE } from '@router/links'
// Components
import Dialog from '@components/Dialog'
// APIs
import { saveBankCard } from '@api'
// Actions
import { toastMsg, loadingClose } from '@actions'
// Utils

export const AddBankCardContext = createContext()

const AddBankCardContextProvider = ({ children }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const memberInfo = useSelector(({ memberInfo }) => memberInfo)

  // 持卡人姓名
  const [name, setName] = useState('')
  // 銀行卡號
  const [bankCardNumber, setBankCardNumber] = useState('')
  // 所屬銀行
  const [bank, setBank] = useState(null)
  // 開戶行省份
  const [province, setProvince] = useState('')
  // 開戶行市區
  const [city, setCity] = useState(null)
  // 手機號碼
  const [phone, setPhone] = useState('')
  // 驗證碼
  const [validateCode, setValidateCode] = useState('')
  // 目前Step
  const [currentStep, setCurrentStep] = useState(1)
  // 彈出視窗是否開啟
  const [isDialogShow, setIsDialogShow] = useState(false)

  //處理使用者還未綁定真實姓名以及手機號碼的情況
  useEffect(() => {
    // 從memberInfo取得真實姓名以及手機號碼
    const { realName, phoneNo } = memberInfo

    if (!!realName) setName(realName)
    if (!!phoneNo) setPhone(phoneNo)

    // 如果真實姓名或是手機號碼其中一樣沒有，就顯示彈出視窗
    if (!realName || !phoneNo) setIsDialogShow(true)
  }, [memberInfo])

  // 處理下一步事件
  const handleNextStep = () => {
    setCurrentStep(prevState => prevState + 1)
  }

  // 處理上一步事件
  const handleLastStep = () => {
    if (currentStep > 1) setCurrentStep(prevState => prevState - 1)
  }

  const handleDialogClose = () => {
    setIsDialogShow(false)
    history.replace(PROFILE)
  }

  // 處理添加銀行卡事件
  const handleSaveBankCard = () => {
    // 如果其中有值是空的，就不執行添加銀行卡
    if (!name || !bankCardNumber || !bank || !province || !city || !phone || !validateCode) return

    saveBankCard({
      name, // 提款人姓名
      phone, // 手機號
      playerId: memberInfo.userId, // 玩家ID
      bankCardNumber, // 銀行卡號
      bankName: bank.bankName, // 銀行名稱
      bankCode: bank.bankCode, // 銀行編號
      subBranchName: 'subBranchName', // 銀行分支名稱
      logoUrl: bank.logoImgUrl, // 銀行卡Logo
      province: city.provinceId, // 省份ID
      provinceName: province.title, // 省份名稱
      city: city.cityId, // 城市ID
      cityName: city.city, // 城市名稱
      isValidate: 0, // 是否驗證(0:是；1：否)
      isDefault: 1, // 是否默認(0:是；1：否)
      validateCode,
    })
      .then(({ data }) => {
        if (data.code === 0) {
          initState()
          dispatch(toastMsg('银行卡添加成功'))
          return history.goBack()
        }
        if (data.code !== 0) {
          return dispatch(toastMsg(data.message))
        }
      })
      .finally(() => dispatch(loadingClose()))
  }

  const initState = () => {
    setName('')
    setBankCardNumber('')
    setBank(null)
    setProvince('')
    setCity(null)
    setPhone('')
    setValidateCode('')
    setCurrentStep(1)
  }

  return (
    <AddBankCardContext.Provider
      value={{
        name,
        bankCardNumber,
        setBankCardNumber,
        bank,
        setBank,
        handleNextStep,
        handleLastStep,
        province,
        setProvince,
        city,
        setCity,
        phone,
        validateCode,
        setValidateCode,
        handleSaveBankCard,
      }}
    >
      {isDialogShow && (
        <Dialog
          title='无法添加银行卡'
          content='请先前往个人设置绑定真实姓名和手机号码'
          extraButtons={{ title: '知道了', handleClick: handleDialogClose }}
        />
      )}
      {children(currentStep)}
    </AddBankCardContext.Provider>
  )
}

export default AddBankCardContextProvider

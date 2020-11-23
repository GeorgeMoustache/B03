import React, { useContext, useEffect, useState } from 'react'
// Constants
import { CHINA_CITIES, PRIVINCES } from '@constants/pickerTypes'
// Components
import * as S from '../style'
import Picker from '@components/Picker'
import TopBar from '@components/TopBar'
import LastStepButton from '../LastStepButton'
import { AddBankCardContext } from '../AddBankCardContextProvider'
import ContactCustomerService from '../ContactCustomerService'

const AddBankCard = () => {
  const { province, setProvince, city, setCity, handleNextStep } = useContext(AddBankCardContext)
  // 「下一步」按鈕是否失效的State
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  // 控管「下一步」按鈕是否失效
  useEffect(() => {
    // 如果「開戶省份」以及「開戶市區」都有填寫，就使得下一步按鈕可以被點擊
    if (!!province && !!city) return setIsButtonDisabled(false)

    return setIsButtonDisabled(true)
  }, [province, city])

  return (
    <S.Container>
      <TopBar title='添加银行卡' left={LastStepButton} />
      <S.MainContent>
        <section>
          <S.InputTitle>开户行省份</S.InputTitle>
          <Picker type={PRIVINCES} setSelectedData={setProvince}>
            {() => <S.Selector isSelected={!!province}>{!!province ? province.title : '请选择开户行省份'}</S.Selector>}
          </Picker>
          <S.InputTitle>开户行市區</S.InputTitle>
          <Picker type={CHINA_CITIES} setSelectedData={setCity} provinceId={province.value}>
            {() => <S.Selector isSelected={!!city}>{!!city ? city.city : '请选择开户行市區'}</S.Selector>}
          </Picker>
          <S.Hint>＊请认真校准开户行及开户行地址，如有错误，请手动修改</S.Hint>
        </section>
        <S.Button disabled={isButtonDisabled} onClick={handleNextStep}>
          下一步
        </S.Button>
        <ContactCustomerService />
      </S.MainContent>
    </S.Container>
  )
}

export default AddBankCard

import React from 'react'
// Constants
import { BIRTHDAY, PHONE, REALNAME } from '@constants/editProfileType'
// Components
import * as S from '../style'
import TopBar from '@components/TopBar'
import EditPhone from './EditPhone'
import EditBirthDay from './EditBirthDay'
import EditRealName from './EditRealName'
import ContactCustomerService from '../ContactCustomerService'

const EditProfile = ({ currentEditType, setCurrentEditType }) => {
  // 沒有編輯類型，就關閉畫面
  if (!currentEditType) return null

  // 關閉編輯視窗
  const handleEditProfileClose = () => {
    setCurrentEditType(null)
  }

  // 客制的返回鍵，給編輯視窗的TopBar使用
  const CustomBackButton = () => {
    return <S.BackButton onClick={handleEditProfileClose} />
  }

  // 取得編輯視窗TopBar的Title名稱
  const getTopBarTitle = () => {
    if (currentEditType === PHONE) return '手机号码'
    if (currentEditType === REALNAME) return '真实姓名'
    if (currentEditType === BIRTHDAY) return '出生日期'
    return ''
  }

  // 渲染對應的編輯Component
  const renderEditTypeForm = () => {
    let Comp = null

    // 1) 根據不同的currentEditType，指定到不同的Component
    if (currentEditType === PHONE) Comp = <EditPhone />
    if (currentEditType === REALNAME) Comp = <EditRealName />
    if (currentEditType === BIRTHDAY) Comp = <EditBirthDay />

    // 2) 如果有成功指向對應的Component，將關閉編輯視窗的函式帶進Props給它
    if (!!Comp) Comp = React.cloneElement(Comp, { handleEditProfileClose })

    // 3) 回傳Comp
    return Comp
  }

  return (
    <S.Container>
      <TopBar title={getTopBarTitle()} left={<CustomBackButton />} />
      <S.MainContent>
        {renderEditTypeForm()}
        <ContactCustomerService />
      </S.MainContent>
    </S.Container>
  )
}

export default EditProfile

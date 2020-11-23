import React, { useState, Fragment } from 'react'
import { useSelector } from 'react-redux'
// Constants
import * as encodedType from '@constants/encodedType'
import { BIRTHDAY, PHONE, REALNAME } from '@constants/editProfileType'
import { BACK } from '@constants/topBarButtonTypes'
// Plugins
import moment from 'moment'
// Components
import * as S from './style'
import TopBar from '@components/TopBar'
import ContactCustomerService from './ContactCustomerService'
import EditProfile from './EditProfile'
// Assets
import avatarMemberImg from '@assets/images/mine/avatar/img__avatar_member.png'
// Utils
import { encodedByType } from '@utils'

const Profile = () => {
  // 取得Redux中，個人資料需要設置的資料
  const { loginName, realName, phoneNo, birthDay } = useSelector(({ memberInfo }) => memberInfo)
  // 切換編輯類別
  const [currentEditType, setCurrentEditType] = useState(null)

  return (
    <Fragment>
      <S.Container>
        <TopBar title='个人资料' left={BACK} />
        <S.MainContent>
          <S.Avatar>
            <img src={avatarMemberImg} alt='Avatar' />
          </S.Avatar>
          <section>
            {/* ===== 用户名 ===== */}
            <S.ProfileInfoTitle>用户名</S.ProfileInfoTitle>
            <S.ProfileInfoDetailContainer>
              <S.ProfileInfoDetail value={loginName} readOnly />
            </S.ProfileInfoDetailContainer>
            {/* ===== 真实姓名 ===== */}
            <S.ProfileInfoTitle>真实姓名</S.ProfileInfoTitle>
            <S.ProfileInfoDetailContainer onClick={() => !realName && setCurrentEditType(REALNAME)}>
              <S.ProfileInfoDetail
                needEdit={!realName}
                value={!!realName ? encodedByType(encodedType.NAME, realName) : ''}
                placeholder='姓名需与银行卡持卡人一致，否则无法提款'
                readOnly
              />
              {!realName && <S.EditButton />}
            </S.ProfileInfoDetailContainer>
            {/* ===== 出生日期 ===== */}
            <S.ProfileInfoTitle>出生日期</S.ProfileInfoTitle>
            <S.ProfileInfoDetailContainer onClick={() => !birthDay && setCurrentEditType(BIRTHDAY)}>
              <S.ProfileInfoDetail
                needEdit={!birthDay}
                value={!!birthDay ? moment(birthDay).format('YYYY年MM月DD日') : ''}
                placeholder='添加出生日期'
                readOnly
              />
              {!birthDay && <S.EditButton />}
            </S.ProfileInfoDetailContainer>
            {/* ===== 手机号码 ===== */}
            <S.ProfileInfoTitle>手机号码</S.ProfileInfoTitle>
            <S.ProfileInfoDetailContainer onClick={() => !phoneNo && setCurrentEditType(PHONE)}>
              <S.ProfileInfoDetail
                needEdit={!phoneNo}
                value={!!phoneNo ? encodedByType(encodedType.PHONE, phoneNo) : ''}
                placeholder='手机号码需与银行卡持卡人一致，否则无法提款'
                readOnly
              />
              {!phoneNo && <S.EditButton />}
            </S.ProfileInfoDetailContainer>
          </section>
          <ContactCustomerService />
        </S.MainContent>
      </S.Container>
      <EditProfile currentEditType={currentEditType} setCurrentEditType={setCurrentEditType} />
    </Fragment>
  )
}

export default Profile

import React, { Fragment, useState } from 'react'
import { useDispatch } from 'react-redux'
// Components
import * as S from '../style'
import DatePicker from '@components/DatePicker'
// Plugins
import moment from 'moment'
// Actions
import { updateMemberBirthday } from '@actions'

// 最遠的日期，最老設到80歲
const minDate = moment().subtract(100, 'years').toDate()
// 最近的日期，必須年滿18歲
const maxDate = moment().subtract(18, 'years').toDate()

const EditBirthDay = ({ handleEditProfileClose }) => {
  const dispatch = useDispatch()
  // 出生日期State，為moment物件，需要使用moment(birthday)去處理
  const [birthday, setBirthday] = useState(null)

  // 處理送出行為
  const handleSubmit = () => {
    // 格式化出生日期，以符合API所要
    const formattedBirthday = moment(birthday).format('YYYY-MM-DD hh:mm:ss')
    // 執行對應Action
    dispatch(updateMemberBirthday(formattedBirthday)).then(() => {
      // 清空欄位
      setBirthday(null)
      // 關閉編輯視窗
      handleEditProfileClose()
    })
  }

  return (
    <Fragment>
      <section>
        <S.ProfileInfoTitle>出生日期</S.ProfileInfoTitle>
        <DatePicker
          mode='date'
          title='请选择出生日期'
          date={birthday}
          minDate={minDate}
          maxDate={maxDate}
          defaultDate={maxDate}
          onConfirm={selectedDate => setBirthday(selectedDate)}
        >
          <S.ProfileInfoDetailContainer>
            <S.Selector isSelected={!!birthday}>
              {!!birthday ? moment(birthday).format('YYYY年MM月DD日') : '请选择出生日期'}
            </S.Selector>
          </S.ProfileInfoDetailContainer>
        </DatePicker>
      </section>
      <S.SubmitButton disabled={!birthday} onClick={handleSubmit}>
        送出
      </S.SubmitButton>
    </Fragment>
  )
}

export default EditBirthDay

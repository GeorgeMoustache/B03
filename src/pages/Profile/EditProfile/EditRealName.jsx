import React, { useState, Fragment } from 'react'
import { useDispatch } from 'react-redux'
// Components
import * as S from '../style'
// Actions
import { updateMemberRealName } from '@actions'
// Utils
import { filterRealName } from '@utils'

const EditRealName = ({ handleEditProfileClose }) => {
  const dispatch = useDispatch()
  // 真實姓名
  const [realName, setRealName] = useState('')

  // 處理真實姓名輸入
  const handleRealNameChange = e => {
    const output = filterRealName(e.target.value)
    setRealName(output)
  }

  // 處理送出行為
  const handleSubmit = () => {
    dispatch(updateMemberRealName(realName)).then(() => {
      // 清空真實姓名欄位
      setRealName('')
      // 關閉編輯頁面
      handleEditProfileClose()
    })
  }

  return (
    <Fragment>
      <section>
        <S.ProfileInfoTitle>真实姓名</S.ProfileInfoTitle>
        <S.ProfileInfoDetailContainer>
          <S.ProfileInfoDetail value={realName} placeholder='请输入您的真实姓名' onChange={handleRealNameChange} />
        </S.ProfileInfoDetailContainer>
      </section>
      <S.SubmitButton disabled={!realName} onClick={handleSubmit}>
        送出
      </S.SubmitButton>
    </Fragment>
  )
}

export default EditRealName

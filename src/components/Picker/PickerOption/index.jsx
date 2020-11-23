import React from 'react'
import { useSelector } from 'react-redux'
// components
import * as S from './style'
// assets
import selectedIconImg from '@assets/images/picker/icon__picker_selected.png'

const PickerOption = ({ img, title, index, isSelected, handlePickerClick }) => {
  const { portalCdn } = useSelector(({ config }) => config)

  return (
    <S.PickerOptionContainer onClick={() => handlePickerClick(index)}>
      <S.PickerOption>
        {img && <S.PickerOptionPrefixedIcon src={img.includes('base64') ? img : `${portalCdn}${img}`} />}
        {title && <S.PickerOptionTitle>{title}</S.PickerOptionTitle>}
        {isSelected && <S.PickerOptionSelectedIcon src={selectedIconImg} />}
      </S.PickerOption>
    </S.PickerOptionContainer>
  )
}

export default PickerOption

import React from 'react'
// components
import * as S from './style'

const LinkItem = ({ icon, title, subtitle, handleClick }) => {
  return (
    <S.LinkItem onClick={handleClick}>
      <S.LinkItemImg src={icon} alt='Link item icon' />
      <S.LinkItemTitle>{title}</S.LinkItemTitle>
      <S.LinkItemSubTitle>{subtitle}</S.LinkItemSubTitle>
      <S.ButtonVisitMore />
    </S.LinkItem>
  )
}

export default LinkItem

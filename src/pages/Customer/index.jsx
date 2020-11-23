import React from 'react'
// constants
import { FEEDBACK } from '@constants/topBarButtonTypes'
// components
import * as S from './style'
import TopBar from '@components/TopBar'
import CustomerLink from './CustomerLink'
import Greeting from './Greeting'

const Customer = () => {
  return (
    <S.Container>
      <TopBar title='我的客服' right={FEEDBACK} transparent white />
      <S.MainContent>
        <Greeting />
        <CustomerLink />
      </S.MainContent>
    </S.Container>
  )
}

export default Customer

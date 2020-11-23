import React from 'react'
// Components
import * as S from './style'
// Utils
import { handleCustomerServiceClick } from '@utils'

const ContactCustomerService = () => {
  return <S.ContactCustomerService onClick={handleCustomerServiceClick}>联系客服</S.ContactCustomerService>
}

export default ContactCustomerService

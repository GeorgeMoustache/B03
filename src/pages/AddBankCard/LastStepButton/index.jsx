import React, { useContext } from 'react'
import * as S from '../style'
// Contexts
import { AddBankCardContext } from '../AddBankCardContextProvider'

const LastStepButton = () => {
  const { handleLastStep } = useContext(AddBankCardContext)

  return <S.BackButton onClick={handleLastStep} />
}

export default LastStepButton

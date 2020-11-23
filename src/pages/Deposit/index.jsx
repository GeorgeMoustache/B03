import React from 'react'
// context
import DepositContextProvider from './DepositContext'
// components
import Container from './Container'


const Deposit = () => {
  return (
    <DepositContextProvider>
      <Container />
    </DepositContextProvider>
  )
}

export default Deposit

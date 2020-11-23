import React from 'react'
// Contexts
import AddBankCardContextProvider from './AddBankCardContextProvider'
// Components
import Step01 from './Step01'
import Step02 from './Step02'
import Step03 from './Step03'

const AddBankCard = () => {
  return (
    <AddBankCardContextProvider>
      {currentStep => {
        if (currentStep === 1) return <Step01 />
        if (currentStep === 2) return <Step02 />
        if (currentStep === 3) return <Step03 />
        return <Step01 />
      }}
    </AddBankCardContextProvider>
  )
}

export default AddBankCard

import React from 'react'
// Constants
import { BACK } from '@constants/topBarButtonTypes'
import { WITHDRAWAL_TUTORIAL } from '@router/links'
// Components
import * as S from './style'
import TopBar from '@components/TopBar'
import { TutorialButton } from '@components/TopBar/TopBarButtons'
import WalletManagement from './WalletManagement'
import WithdrawalAmount from './WithdrawalAmount'
import BankCardManagement from './BankCardManagement'
import WithdrawalContextProvider from './WithdrawalContextProvider'

const Withdrawal = () => {
  return (
    <S.Container>
      <TopBar title='取款' left={BACK} right={<TutorialButton link={WITHDRAWAL_TUTORIAL} />} />
      <WithdrawalContextProvider>
        <S.MainContent>
          <section>
            <WalletManagement />
          </section>
          <section>
            <BankCardManagement />
          </section>
          <section>
            <WithdrawalAmount />
          </section>
        </S.MainContent>
      </WithdrawalContextProvider>
    </S.Container>
  )
}

export default Withdrawal

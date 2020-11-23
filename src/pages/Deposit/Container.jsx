import React, { useContext } from 'react'
import { useHistory } from 'react-router'
import { DEPOSIT_TUTORIAL } from '@router/links'
// context
import { DepositContext } from './DepositContext'
// components
import { StyleService } from './styles'
import TopBar from '@components/TopBar/'
import { TopBarButton } from '@components/TopBar/TopBarButtons/style'
import { TutorialButton } from '@components/TopBar/TopBarButtons/'
import BankConnect from './BankConnect'
import PayInfo from './PayInfo'
import Payment from './Payment'
import Result from './Result'
// assets
import backButtonImg from '@assets/images/topBar/button__topBar_back.png'
// utils
import { handleCustomerServiceClick } from '@utils'

const Container = () => {
  const history = useHistory()
  const { onlinePayStatus, offlinePayStatus } = useContext(DepositContext)

  // 返回按鈕
  const backButton = () => <TopBarButton imgSrc={backButtonImg} onClick={handleBack} />

  // 返回事件
  const handleBack = () => (offlinePayStatus ? window.location.reload() : history.goBack())

  return (
    <>
      <TopBar title='存款' left={backButton()} right={<TutorialButton link={DEPOSIT_TUTORIAL} />} />
      {!offlinePayStatus ? (
        <>
          <Payment />
          {onlinePayStatus ? <BankConnect /> : <PayInfo />}
        </>
      ) : (
        <Result />
      )}
      {!offlinePayStatus && (
        <StyleService>
          如需帮助，请 <button onClick={handleCustomerServiceClick}>联系客服</button>
        </StyleService>
      )}
    </>
  )
}

export default Container

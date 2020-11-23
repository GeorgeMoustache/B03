import React from 'react'
// context
import HomeContextProvider from './HomeContext'
// constants
import { LOGO, MESSAGE_CENTER } from '@constants/topBarButtonTypes'
// components
import * as S from './styles'
import TopBar from '@components/TopBar'
import Banner from './Banner'
import DownloadApp from './DownloadApp'
import FirstVisitDialog from './FirstVisitDialog'
import Games from './Games'
import Marquee from './Marquee'
import MarqueeDialog from './MarqueeDialog'
import MemberInfoAndAction from './MemberInfoAndAction'

const Home = () => {
  return (
    <HomeContextProvider>
      
      <MarqueeDialog />
      <FirstVisitDialog />
      <S.Container>
        <DownloadApp />
        <TopBar left={LOGO} right={MESSAGE_CENTER} />
        <Banner />
        <Marquee />
        <MemberInfoAndAction />
        <Games />
      </S.Container>
    </HomeContextProvider>
  )
}

export default Home

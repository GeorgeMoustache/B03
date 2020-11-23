import React, { useRef, useState } from 'react'
import styled from 'styled-components'
// constants
import { BACK, VIP_DETAIL } from '@constants/topBarButtonTypes'
// components
import TopBar from '@components/TopBar/'
import RightCard from './RightCard'
import RightInfo from './RightInfo'
import RightPromo from './RightPromo'
import RightSpec from './RightSpec'

const StyledVipRight = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding-top: 44px;
  overflow: auto;
  .topbar-wrap {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: ${({ theme }) => theme.zIndex.fixedLayer};
  }
  .card-wrap {
    margin: -20px auto 10px 0;
    padding: 35px 0;
    background: #fff;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
    &.active {
      position: fixed;
      left: 0;
      top: 44px;
      width: 100%;
    }
  }
`
const StyleSpace = styled.div`
  height: 0;
`

const VipRight = () => {
  const cardRef = useRef('cardRef')
  const spaceRef = useRef('spaceRef')
  const [fixLock, setFixLock] = useState(false)

  // 捲動效果
  const handleScroll = evt => {
    let scrollTop = evt.target.scrollTop
    const spaceTop = spaceRef.current.offsetTop
    if (scrollTop >= spaceTop - 44) {
      setFixLock(true)
      document.getElementById('spaceRef').style.height = `${cardRef.current.clientHeight - 5}px`
    } else {
      setFixLock(false)
      document.getElementById('spaceRef').style.height = 0
    }
  }

  return (
    <StyledVipRight onScroll={handleScroll}>
      <div className='topbar-wrap'>
        <TopBar title={'VIP特权'} left={BACK} right={VIP_DETAIL} />
      </div>
      <RightInfo />
      <StyleSpace id='spaceRef' ref={spaceRef} />
      <div ref={cardRef} className={`card-wrap ${fixLock ? 'active' : ''}`}>
        <RightCard />
      </div>
      <RightSpec />
      <RightPromo />
    </StyledVipRight>
  )
}

export default VipRight

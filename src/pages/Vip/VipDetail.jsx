import React from 'react'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// components
import TopBar from '@components/TopBar/'
import DetailRange from './DetailRange'
import DetailRate from './DetailRate'
import DetailRule from './DetailRule'

const VipDetail = () => {
  return (
    <>
      <TopBar title={'VIP详情'} left={BACK} />
      <DetailRate />
      <DetailRange />
      <DetailRule />
    </>
  )
}

export default VipDetail

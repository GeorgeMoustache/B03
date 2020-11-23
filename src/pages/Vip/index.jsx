import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import * as routes from '@router/links'
// context
import VipContextProvider from './VipContext'
// components
import VipDetail from './VipDetail'
import VipRight from './VipRight'

const Vip = () => {
  const location = useLocation()
  const [vipType, setVipType] = useState(0) // 0:特權; 1:詳情

  // 依 router 顯示對應模版
  useEffect(() => {
    const path = location.pathname
    if (path.match(routes.VIP)) setVipType(0)
    if (path.match(routes.VIP_DETAIL)) setVipType(1)
  }, [location])

  return (
    <VipContextProvider>
      {vipType ? <VipDetail /> : <VipRight />}
    </VipContextProvider>
  )
}

export default Vip

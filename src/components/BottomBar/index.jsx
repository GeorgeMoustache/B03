import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router'
import * as routes from '@router/links'
import routersConfig from '@router/config'
// components
import * as S from './style'

/**
 * @name bottomBarObj
 * @description BottomBar需要用到的相關資訊
 * @param [routes.????] 使用路由作為物件的Key值
 * @param label 顯示的文字
 * @param icon.default 顯示icon(預設)
 * @param icon.actived 顯示icon(激活狀態)
 */
const bottomBarObj = {
  [routes.HOME]: {
    label: '首页',
    icon: {
      default: require('@assets/images/bottomBar/icon__home.png'),
      actived: require('@assets/images/bottomBar/icon__home_actived.png'),
    },
  },
  [routes.DISCOUNT]: {
    label: '优惠',
    icon: {
      default: require('@assets/images/bottomBar/icon__discount.png'),
      actived: require('@assets/images/bottomBar/icon__discount_actived.png'),
    },
  },
  [routes.CUSTOMER]: {
    label: '客服',
    icon: {
      default: require('@assets/images/bottomBar/icon__customer.png'),
      actived: require('@assets/images/bottomBar/icon__customer_actived.png'),
    },
  },
  [routes.SPONSOR]: {
    label: '赞助',
    icon: {
      default: require('@assets/images/bottomBar/icon__sponsor.png'),
      actived: require('@assets/images/bottomBar/icon__sponsor_actived.png'),
    },
  },
  [routes.MINE]: {
    label: '我的',
    icon: {
      default: require('@assets/images/bottomBar/icon__mine.png'),
      actived: require('@assets/images/bottomBar/icon__mine_actived.png'),
    },
  },
}

const BottomBar = ({ location }) => {
  // 是否要顯示Bottom Bar
  const [isShow, setIsShow] = useState(true)

  // url改變的時候，去確認是否要顯示Bottom Bar
  useEffect(() => {
    // 從router/condig找到對應當前路由的Object，取出isShowBottomBar變數
    const foundRoutersConfigItem = routersConfig.find(routersConfigItem => routersConfigItem.path === location.pathname)

    // 將變更後的isShowBottomBar，賦值給isShow State
    if (!!foundRoutersConfigItem) {
      const { nav: isShowBottomBar } = foundRoutersConfigItem
      // eslint-disable-next-line
      if (isShowBottomBar != null) setIsShow(isShowBottomBar)
    }
  }, [location.pathname])

  /**
   * @name renderBottomBarItems
   * @description 選染BottomBar中的各個items
   */
  const renderBottomBarItems = () => {
    // react-router 提供的 withRouter，將路由資訊藉由props傳進來
    // 從中取出path，用來知道哪個bottomItem被點擊或是呈現激活狀態
    const { pathname: currentPath } = location

    return Object.keys(bottomBarObj).map(route => {
      const isActived = currentPath === route
      const { label, icon } = bottomBarObj[route]

      return (
        <S.BottomBarItem key={route} to={route}>
          <S.Icon src={isActived ? icon.actived : icon.default} alt='Bottom bar icon' />
          <S.Label isActived={isActived}>{label}</S.Label>
        </S.BottomBarItem>
      )
    })
  }

  return isShow && <S.BottomBar>{renderBottomBarItems()}</S.BottomBar>
}

export default withRouter(BottomBar)

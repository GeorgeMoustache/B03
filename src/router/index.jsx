import React, { useEffect, useState } from 'react'
import { createHashHistory } from 'history'
import { Redirect, Route, useHistory, useLocation } from 'react-router-dom'
import * as routes from './links'
import { useDispatch } from 'react-redux'
// actions
import { USER_LOGIN } from '@actions/actionType'

export const history = createHashHistory()

const Guard = props => {
  const { config } = props
  const location = useLocation()
  const history = useHistory()
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const memberInfo = JSON.parse(localStorage.getItem('memberInfo'))
  const [targetComponent, setTargetComponent] = useState({})

  const routeComponent = () => {
    if (token) {
      return <Route exact path={targetComponent.path} component={targetComponent.component} />
    } else {
      if (targetComponent.auth && !location.search.includes('logout')) {
        return <Redirect to={routes.REGISTER} />
      } else {
        return <Route exact path={targetComponent.path} component={targetComponent.component} />
      }
    }
  }

  useEffect(() => {
    const curRoute = config.find(item => item.path === location.pathname)
    //判斷導向頁面是否存在，不存在的頁面導向首頁
    if (curRoute) {
      setTargetComponent(curRoute)
      //已登入狀態下，登入註冊頁面都導向首頁
      if (token) {
        const path = curRoute.path
        if (path === routes.LOGIN || path === routes.REGISTER) {
          history.push(routes.HOME)
        }
      }
    } else {
      history.push(routes.HOME)
    }
    //如果 localStorage 有 memberInfo 就取入 redux
    if (memberInfo) {
      dispatch({ type: USER_LOGIN, payload: memberInfo })
    }
  }, [history, config, location, dispatch, memberInfo, token])

  return <React.Fragment>{routeComponent()}</React.Fragment>
}

export default Guard

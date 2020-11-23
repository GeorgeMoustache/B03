import React from 'react'
import { useHistory } from 'react-router-dom'
import * as route from '@router/links'
import { useDispatch } from 'react-redux'
// components
import * as S from './style'
// assets
import backButtonImg from '@assets/images/topBar/button__topBar_back.png'
import logoImg from '@assets/images/topBar/logo.png'
import messageButtonImg from '@assets/images/topBar/button__topBar_message.png'
import settingButtonImg from '@assets/images/topBar/button__topBar_setting.png'
import tutorialButtonImg from '@assets/images/topBar/button__topBar_tutorial.png'
import customerServiceButtonImg from '@assets/images/topBar/button__topBar_customer-service.png'
// actions
import { closeWebView } from '@actions'
// utils
import { handleCustomerServiceClick } from '@utils'

// Logo
export const Logo = () => {
  return <S.Logo src={logoImg} />
}

// 返回按鈕
export const BackButton = () => {
  let history = useHistory()
  return <S.TopBarButton imgSrc={backButtonImg} onClick={() => history.goBack()} />
}

// 聯繫客服按鈕
export const CustomerServiceButton = () => {
  return <S.TopBarButton imgSrc={customerServiceButtonImg} onClick={handleCustomerServiceClick} />
}

// 訊息按鈕
export const MessageButton = () => {
  let history = useHistory()
  return <S.TopBarButton imgSrc={messageButtonImg} onClick={() => history.push(route.MESSAGE_CENTER)} />
}

// 設定按鈕
export const SettingButton = () => {
  let history = useHistory()
  return <S.TopBarButton imgSrc={settingButtonImg} onClick={() => history.push(route.SETTING)} />
}

// 關閉WebView的按鈕
export const CloseWebViewButton = () => {
  const dispatch = useDispatch()
  return <S.TopBarButton imgSrc={backButtonImg} onClick={() => dispatch(closeWebView())} />
}

// 意見回饋
export const FeedbackButton = () => {
  let history = useHistory()
  return <S.FeedbackButton onClick={() => history.push(route.FEEDBACK)}>意见反馈</S.FeedbackButton>
}

// VIP 詳情
export const VipDetailButton = () => {
  let history = useHistory()
  return <S.VipButton onClick={() => history.push(route.VIP_DETAIL)}>VIP详情</S.VipButton>
}

// 教程
/**
 * @name TutorialButton
 * @param {String} link
 * @description TopBar中，教程的按鈕，需要以React Element方式使用
 * @example
 * 1) 首先引入TopBar這個Component，import TopBar from '@components/TopBar'
 * 2) 再引入TutorialButton這個Component，import { TutorialButton } from '@components/TopBar/TopBarButtons'
 * 3) 再取得對應的教程link，import { DEPOSIT_TUTORIAL } from '@router/links'
 * 4) 使用React element方式帶入props中，並在TutorialButton加上link的props指定連結，如下方：
 * <TopBar right={<TutorialButton link={DEPOSIT_TUTORIAL} />} title='消息中心' />
 */
export const TutorialButton = ({ link = route.TUTORIAL }) => {
  let history = useHistory()

  return (
    <S.TutorialButton onClick={() => history.push(link)}>
      <span>教程</span>
      <S.TopBarButton imgSrc={tutorialButtonImg} />
    </S.TutorialButton>
  )
}

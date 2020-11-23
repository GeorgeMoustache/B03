import React from 'react'
import { useSelector } from 'react-redux'
// constants
import { CLOSE_WEBVIEW } from '@constants/topBarButtonTypes'
// components
import * as S from './style'
import TopBar from '@components/TopBar'

const Webview = () => {
  // 取得Redux中的WebView資訊
  const webViewData = useSelector(({ webView }) => webView)

  // 如果WebView資訊是null，不顯示
  if (!webViewData) return null

  return (
    <S.WebViewContainer>
      <TopBar left={CLOSE_WEBVIEW} title={webViewData.title} />
      <S.WebViewMainContent>
        <iframe src={webViewData.url} frameBorder='0' title={webViewData.title}></iframe>
      </S.WebViewMainContent>
    </S.WebViewContainer>
  )
}

export default Webview

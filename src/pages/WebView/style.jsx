import styled from 'styled-components'

// WebView外層的容器
export const WebViewContainer = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  overflow: hidden;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.coverLayer};
`

// WebView的主要內容，主要放iframe用
export const WebViewMainContent = styled.main`
  flex: 1 1 0;
  background: black;
  width: 100%;
  height: 100%;

  & > iframe {
    background: black;
    width: 100%;
    height: 100%;
    border: none;
  }
`

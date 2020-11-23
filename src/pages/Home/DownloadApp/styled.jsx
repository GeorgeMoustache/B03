import styled from 'styled-components'

// DownloadApp的Bar
export const DownloadApp = styled.div`
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  display: flex;
  flex: 0 0 auto;
  min-height: 56px;
  padding: 8px 14px;
  width: 100%;

  & > :nth-child(n):not(:last-child) {
    margin-right: 8px;
  }
`

// DownloadApp裡面，立即下載的按鈕
export const DownloadAppButton = styled.button`
  background: #dccab8;
  background-image: linear-gradient(to left, #d2b496, #dccab8);
  border-radius: 5px;
  color: #fff;
  font-size: 12px;
  height: 24px;
  margin-left: auto;
  min-height: 17px;
  min-width: 64px;
  padding: 1px 6px;
  padding: 5px;
`

// 關閉DownloadApp Bar的按鈕
export const CloseButton = styled.button`
  height: 16px;
  width: 16px;

  & > img {
    height: auto;
    width: 100%;
  }
`

// App Icon
export const AppIcon = styled.img`
  height: 37px;
  width: 37px;
`

// DownloadApp中的文字內容
export const DownloadAppTextContent = styled.div`
  color: #414655;

  & > h3 {
    font-size: 14px;
    font-weight: Medium;
  }
  & > p {
    font-size: 12px;
    line-height: 17px;
  }
`

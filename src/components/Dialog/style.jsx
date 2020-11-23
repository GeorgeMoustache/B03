import styled from 'styled-components'

// 最外層Container，半透明黑
export const DialogContainer = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.66);
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.dialog};
`

// Dialog主體
export const DialogMain = styled.div`
  align-items: center;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  width: 327px;
`

// Dialog主體中的頭部
export const DialogHeader = styled.h5`
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  color: #414655;
  display: flex;
  flex: 0 0 auto;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  height: 47px;
  justify-content: center;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  width: 100%;
`

// Dialog主體中的內容
export const DialogContent = styled.pre`
  color: #9aa4c2;
  flex: 1 1 auto;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  max-height: 257px;
  overflow-y: scroll;
  padding: 10px 14px;
  white-space: pre-wrap;
  word-wrap: break-word;
`

// Dialog主體中的按鈕容器
export const DialogButtonContainer = styled.div`
  border-top: 1px solid #f2f2f2;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  height: 60px;
  width: 100%;
`

// Dialog主體中的按鈕
export const DialogButton = styled.button`
  align-items: center;
  color: #414655;
  display: flex;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  justify-content: center;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
  width: 100%;

  &:only-of-type {
    color: #d2b79c;
  }

  &:nth-of-type(n + 2) {
    border-left: 1px solid #f2f2f2;
    color: #d2b79c;
  }
`

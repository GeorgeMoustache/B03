import styled, { keyframes } from 'styled-components'

const slideUp = keyframes`
  from {
    transform: translateY(100%)
  }
  to {
    transform: translateY(0)
  }
`

const fadeIn = keyframes`
  from {
    background: rgba(0, 0, 0, 0);
  }
`

export const PickerOverlay = styled.div`
  align-items: center;
  animation: ${fadeIn} 0.3s linear both;
  background: rgba(0, 0, 0, 0.66);
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  justify-content: flex-end;
  left: 0;
  padding-top: 138px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndex.dialog};
`

export const PickerContainer = styled.div`
  animation: ${slideUp} 0.3s ease-in-out 0.2s backwards;
  display: flex;
  flex-flow: column nowrap;
  flex: 0 0 auto;
  max-height: 100%;
  overflow: hidden;
  width: 100%;
`

export const PickerHeader = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 15px 15px 0 0;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 50px;
  padding: 0 14px;
  position: relative;
  width: 100%;
`

export const PickerTitle = styled.h5`
  color: #414655;
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  left: 50%;
  letter-spacing: normal;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const PickerCancelButton = styled.button`
  color: #d2b79c;
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;
`

export const PickerContent = styled.div`
  background-color: #f8f8f8;
  overflow-y: scroll;
  padding-top: 10px;
`

import styled from 'styled-components'
// assets
import rightArrowImg from '@assets/images/feedback/icon__feedback_right-arrow.png'

export const Container = styled.div`
  background: #f8f8f8;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
`

export const MainContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 0;
  height: 100%;
  overflow-y: scroll;
  padding: 14px 0 10px;
  position: relative;
  width: 100%;
`

export const Subtitle = styled.h6`
  background-color: #ffffff;
  color: #414655;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  padding: 5px 14px;

  &:nth-child(n + 2) {
    margin-top: 10px;
  }
`

export const Selector = styled.button`
  background-color: #ffffff;
  color: ${({ isSelected }) => (isSelected ? '#414655' : '#cbced8')};
  display: flex;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;
  padding: 5px 30px;
  position: relative;
  width: 100%;

  &::after {
    background-image: url(${rightArrowImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    height: 9px;
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 6px;
  }
`

export const InputArea = styled.textarea`
  background-color: #ffffff;
  border: none;
  color: #414655;
  display: flex;
  flex: 1 1 0;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  height: 100%;
  letter-spacing: normal;
  line-height: normal;
  max-height: 375px;
  padding: 5px 30px;
  resize: none;
  width: 100%;

  &::placeholder {
    color: #cbced8;
  }
`

export const InputAreaInfos = styled.div`
  align-items: center;
  background-color: #ffffff;
  color: #d2b79c;
  display: flex;
  flex-flow: row nowrap;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  height: 30px;
  justify-content: space-between;
  letter-spacing: normal;
  line-height: normal;
  padding: 0 14px;
`

export const InputAreaWordsCount = styled.p`
  color: #9aa4c2;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;
  text-align: right;
  & > span {
    color: #414655;
  }
`

export const SubmitButton = styled.button`
  background-image: linear-gradient(to left, #d2b496, #dccab8);
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  height: 45px;
  letter-spacing: normal;
  line-height: normal;
  margin: 20px 14px;
  text-align: center;

  &:disabled {
    color: #414655;
    opacity: 0.4;
  }
`

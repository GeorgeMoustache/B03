import backButtonImg from '@assets/images/topBar/button__topBar_back.png'
import clearButtonImg from '@assets/images/addBankCard/icon__add-bankcard_clear.png'
import rightArrowImg from '@assets/images/feedback/icon__feedback_right-arrow.png'
import styled from 'styled-components'

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
  & > section {
    background-color: #ffffff;
    padding: 0 14px;
  }
  & > section:nth-child(n + 2) {
    margin-top: 10px;
  }
`

export const InputTitle = styled.h5`
  color: #414655;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  line-height: 30px;
`

export const TextInputContainer = styled.div`
  align-items: center;
  border-bottom: #f2f2f2 1px solid;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
`

export const TextInput = styled.input`
  color: #414655;
  font-size: 14px;
  font-weight: Medium;
  line-height: 30px;
  padding: 0 14px;
  width: 100%;

  &::placeholder {
    color: #cbced8;
  }

  &:disabled {
    background-color: inherit;
  }
`

export const TextInputClearButton = styled.button`
  background-image: url(${clearButtonImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 18px;
  width: 18px;
`

export const Selector = styled.button`
  align-items: center;
  background-color: #ffffff;
  border-bottom: #f2f2f2 1px solid;
  color: ${({ isSelected }) => (isSelected ? '#414655' : '#cbced8')};
  display: flex;
  display: flex;
  font-size: 14px;
  font-weight: Medium;
  justify-content: space-between;
  line-height: 30px;
  padding: 0 6px 0 14px;
  width: 100%;

  &::after {
    background-image: url(${rightArrowImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    height: 9px;
    width: 6px;
  }
`

export const Hint = styled.span`
  color: #d2b79c;
  display: inline-block;
  font-size: 12px;
  line-height: 17px;
  padding: 5px 0;
`

export const Button = styled.button`
  flex: 0 0 auto;
  background-image: linear-gradient(to left, #d2b496, #dccab8);
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  height: 45px;
  margin: 20px 14px;
  text-align: center;

  &:disabled {
    color: #414655;
    opacity: 0.4;
  }
`

export const ContactCustomerService = styled.a`
  font-size: 12px;
  color: #136fef;
  text-align: center;
  margin-top: 50px;

  &::before {
    content: '如需帮助，请 ';
    color: #9aa4c2;
  }
`

export const BackButton = styled.button`
  width: 25px;
  height: 25px;
  background-image: url(${backButtonImg});
  background-repeat: no-repeat;
  background-position: center left;
  background-size: contain;
`

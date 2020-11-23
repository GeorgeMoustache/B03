import styled from 'styled-components'

export const WithdrawalAmount = styled.div`
  background-color: #ffffff;
  padding: 0 14px;
`
export const WithdrawalAmountTitle = styled.h5`
  border-bottom: #f2f2f2 1px solid;
  color: #414655;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 50px;
`

export const WithdrawalAmountInputContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  border-bottom: #f2f2f2 1px solid;

  &::before {
    content: '¥';
    font-size: 14px;
    font-weight: 500;
    color: #414655;
  }
`

export const WithdrawalAmountInput = styled.input`
  font-size: 14px;
  font-weight: 500;
  height: 35px;
  color: #414655;
  width: 100%;

  &,
  &:focus {
    outline: none;
    box-shadow: none;
    border: none;
  }

  &::placeholder {
    color: #cbced8;
  }
`

export const Hint = styled.p`
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #d2b79c;
  padding: 5px 0;

  & > span {
    color: #414655;
  }
`

export const SquareButtonContainer = styled.div`
  padding: 20px 14px;
`

export const SquareButton = styled.button`
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
  text-align: center;
  width: 100%;

  &:disabled {
    color: #414655;
    opacity: 0.4;
  }
`

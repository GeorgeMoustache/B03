import styled from 'styled-components'
import addImg from '@assets/images/withdrawal/icon__withdrawal_add.png'
import tickImg from '@assets/images/withdrawal/icon__tick.png'

export const BankCardManagement = styled.div`
  background-color: #ffffff;
  padding: 0 14px;
`
export const BankCardManagementTitle = styled.h5`
  border-bottom: #f2f2f2 1px solid;
  color: #414655;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 50px;
`

export const BankCardItem = styled.div`
  align-items: center;
  border-bottom: #f2f2f2 1px solid;
  display: flex;
  flex-flow: row nowrap;
  height: 50px;
  padding-left: 10px;
`

export const BankCardIcon = styled.img`
  height: 32px;
  width: 32px;
`

export const BankCardTitle = styled.h5`
  color: #414655;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  margin: 0 auto 0 5px;
`

export const BankCardRadioButton = styled.button`
  align-items: center;
  background-color: ${({ checked }) => checked && '#b1987f'};
  border-radius: 50%;
  border: solid 2px #b1987f;
  display: flex;
  height: 18px;
  justify-content: center;
  width: 18px;

  &::before {
    background-image: ${({ checked }) => checked && `url(${tickImg})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: block;
    height: 10px;
    width: 10px;
  }
`

export const AddBankCardButton = styled.button`
  align-items: center;
  color: #d2b99e;
  display: flex;
  font-size: 14px;
  font-weight: 500;
  height: 50px;
  justify-content: center;
  text-align: center;
  width: 100%;

  &::before {
    background-image: url(${addImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: inline-block;
    height: 12px;
    margin-right: 5px;
    width: 12px;
  }
`

export const Hint = styled.span`
  color: #d2b79c;
  display: inline-block;
  font-size: 12px;
  margin-top: 7px;
  padding: 0 14px;
`

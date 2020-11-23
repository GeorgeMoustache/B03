import { Link } from 'react-router-dom'
// Components
import styled from 'styled-components'
// Assets
import bankCardImg from '@assets/images/cardManagement/bg__bank-card.png'

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
    padding: 0 14px;
  }
`

export const BankCardItem = styled.div`
  background-image: url(${bankCardImg});
  background-repeat: no-repeat;
  background-size: contain;
  flex: 0 0 auto;
  padding-top: ${(135 / 315) * 100}%;
  position: relative;
  width: 100%;

  &:nth-child(n + 2) {
    margin-top: 10px;
  }
`

export const BankCardItemContent = styled.div`
  padding: 0 10px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`

export const BankCardItemHeader = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin-bottom: 35px;
  padding: 0 16px;
`

export const BankCardItemTitle = styled.h5`
  color: #ffffff;
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 600;
  letter-spacing: normal;
  line-height: normal;
`

export const BankCardItemSubtitle = styled.p`
  color: #3e4354;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
`

export const BankCardItemLogo = styled.img`
  height: 32px;
  margin-right: 8px;
  width: 32px;
`

export const AddBankCardButton = styled(Link)`
  align-items: center;
  background-color: #ffffff;
  color: #d2b99e;
  display: flex;
  flex-flow: row nowrap;
  font-size: 14px;
  font-weight: 500;
  height: 50px;
  justify-content: center;
  margin-top: 14px;
  text-align: center;
  width: 100%;
  & > img {
    height: 14px;
    margin-right: 5px;
    width: 14px;
  }
`

export const Hint = styled.span`
  color: #9aa4c2;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  margin: 14px auto 0;
  padding: 0 14px;
  text-align: center;
`

export const EmptyState = styled.img`
  height: 180px;
  margin: 130px auto 0;
  width: 180px;
`

import expandImg from '@assets/images/withdrawal/icon__withdrawal_expand.png'
import renewImg from '@assets/images/withdrawal/icon__withdrawal_renew.png'
import styled from 'styled-components'
import walletImg from '@assets/images/withdrawal/icon__withdrawal_wallet.png'

// 外層容器
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
`

// 放置獲取錢包金額與一鍵回收
export const WalletActions = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  flex-flow: row nowrap;
  height: 50px;
  justify-content: space-between;
  padding: 0 14px;
  position: relative;
  width: 100%;

  &::after {
    background-color: #f2f2f2;
    bottom: 0;
    content: '';
    height: 1px;
    position: absolute;
    width: calc(100% - 28px);
  }
`

// 獲取錢包金額按鈕
export const WalletReloadButton = styled.button`
  align-items: center;
  color: #414655;
  display: flex;
  flex-flow: row nowrap;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;

  &::after {
    background: url(${renewImg}) no-repeat center;
    background-size: contain;
    content: '';
    display: block;
    height: 18px;
    margin-left: 5px;
    width: 18px;
  }
`

// 一鍵回收按鈕
export const WalletRecycleButton = styled.button`
  color: #d2b79c;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;
  text-align: right;
`

// 放置中心錢包、鎖定錢包，以及各場館錢包容器
export const WalletMainContent = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-flow: row wrap;
  flex: 0 0 auto;
  padding: 7px 14px 0;
  width: 100%;
`

// 橫列容器，包覆之後會獲取flex row樣式
export const Row = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 60px;
  width: 100%;

  &:not(:last-of-type) {
    border-bottom: #f2f2f2 1px solid;
  }
`

// 中心錢包、鎖定錢包
export const WalletSummaryItem = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 50%;
  justify-content: center;
`

// 中心錢包、鎖定錢包的標題
export const WalletSummaryItemTitle = styled.h5`
  align-items: center;
  color: #414655;
  display: flex;
  flex-flow: row nowrap;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;

  &::before {
    background: url(${walletImg}) no-repeat center;
    background-size: contain;
    content: '';
    display: block;
    height: 14px;
    margin-right: 3px;
    width: 14px;
  }
`

// 中心錢包、鎖定錢包的敘述
export const WalletSummaryItemDescription = styled.span`
  color: #d2b79c;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
`

// 各場館錢包
export const WalletItem = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  flex: 0 0 25%;
  justify-content: center;
  position: relative;

  &:not(:nth-child(4n))::after {
    background-color: #f2f2f2;
    content: '';
    display: block;
    height: 20px;
    position: absolute;
    right: 0;
    width: 1px;
  }
`

// 各場館錢包的標題
export const WalletItemTitle = styled.h5`
  color: #3e4354;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-bottom: 1px;
  text-align: center;
`

// 各場館錢包的敘述
export const WalletItemDescription = styled.span`
  color: #9aa4c2;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;
`

// 顯示所有場館/隱藏所有場館按鈕容器
export const WalletExpandButtonContainer = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  height: 50px;
  justify-content: center;
  width: 100%;
`

// 顯示所有場館/隱藏所有場館按鈕本體
export const WalletExpandButton = styled.button`
  align-items: center;
  color: #d3b498;
  display: flex;
  flex-flow: row nowrap;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;

  &::after {
    background: url(${expandImg}) no-repeat center;
    background-size: contain;
    content: '';
    display: block;
    height: 12px;
    margin-left: 5px;
    transform: ${({ isExpand }) => isExpand && 'rotate(180deg)'};
    width: 12px;
  }
`

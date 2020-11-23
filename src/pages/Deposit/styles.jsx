import styled from 'styled-components'
// assets
import arrow from '@assets/images/common/icon__arrow_visit-more.png'
import payTypeActive from '@assets/images/deposit/payType_active.png'

export const StyleSection = styled.div`
  margin-top: 10px;
  padding: 16px 14px;
  background: #fff;
`

export const StyleSubTitle = styled.div`
  margin-bottom: 25px;
  font-size: 14px;
  color: #414655;
  font-weight: bold;
`

export const StylePayment = styled.div`
  display: flex;
  flex-wrap: wrap;
  button {
    position: relative;
    width: 23%;
    margin: 0 1% 2% 1%;
    padding: 15px 0 10px 0;
    border: 1px solid #9aa4c2;
    border-radius: 5px;
    overflow: hidden;
    font-size: 12px;
    color: #414655;
    text-align: center;
    &.active {
      border-color: #d2b79c;
      &::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        display: block;
        width: 16px;
        height: 16px;
        background: url(${payTypeActive}) center center no-repeat;
        background-size: 100% auto;
      }
    }
    img {
      display: block;
      width: 24px;
      height: 24px;
      margin: 0 auto 3px auto;
    }
  }
`

export const StylePayName = styled.div`
  margin-top: 10px;
  padding: 8px 14px;
  background: #fff;
  font-size: 14px;
  color: #414655;
  input {
    display: block;
    width: 100%;
    margin-bottom: 5px;
    padding: 0 14px;
    border: none;
    border-bottom: 1px solid #f2f2f2;
    font-size: 14px;
    font-weight: bold;
    line-height: 32px;
    &::-webkit-input-placeholder {
      color: #cbced8;
    }
  }
`

export const StyleBankSelector = styled.div`
  margin-top: 10px;
  padding: 8px 14px 0 14px;
  background: #fff;
  font-size: 14px;
  color: #414655;
  .title {
    margin-bottom: 5px;
    font-size: 14px;
    color: #404454;
  }
  button {
    display: block;
    width: 100%;
    margin-bottom: 5px;
    padding: 0 14px;
    background: url(${arrow}) 96% center no-repeat;
    background-size: 6px auto;
    border: none;
    font-size: 14px;
    color: #cbced8;
    line-height: 32px;
    font-weight: bold;
    text-align: left;
    &.active {
      color: #404454;
    }
  }
`

export const StyleQuickMoney = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  button {
    width: 23%;
    margin: 1%;
    border: 1px solid #9aa4c2;
    border-radius: 5px;
    font-size: 14px;
    color: #414655;
    line-height: 35px;
    font-weight: bold;
    &.active {
      background: #d2b79c;
      border-color: #d2b79c;
      color: #fff;
    }
  }
`

export const StylePrice = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  border-bottom: 1px solid #f2f2f2;
  &::before {
    content: '¥';
    font-size: 14px;
    line-height: 35px;
    font-weight: bold;
  }
  input {
    display: block;
    width: 100%;
    border: none;
    font-size: 14px;
    font-weight: bold;
    line-height: 35px;
    &::-webkit-input-placeholder {
      color: #cbced8;
    }
  }
`

export const StyleNote = styled.div`
  font-size: 12px;
  color: #d2b79c;
  line-height: 1.5;
  &.spacing {
    margin-top: 5px;
    padding: 0 14px;
  }
  button {
    font-size: 12px
    color: #136fef;
  }
`

export const StyleSubmit = styled.div`
  margin-top: 25px;
  padding: 0 14px;
  button {
    display: block;
    width: 100%;
    background: linear-gradient(to right, #dccab8, #d2b496);
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    line-height: 45px;
    text-align: center;
    &[disabled] {
      color: #414655;
      opacity: 0.4;
    }
  }
`

export const StyleBankConnect = styled.div`
  text-align: center;
  dl {
    margin-bottom: 25px;
    color: #414655;
    dt {
      margin-bottom: 25px;
      font-size: 14px;
      font-weight: bold;
    }
    dd {
      font-size: 12px;
      line-height: 1.5;
    }
  }
  .time {
    font-size: 18px;
    color: #d2b79c;
    font-weight: bold;
  }
`

export const StyleResultItem = styled.dl`
  padding-top: 10px;
  font-size: 14px;
  color: #414655;
  dt {
    margin-bottom: 10px;
  }
  dd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2px 0 2px 14px;
    border-bottom: 1px solid #f2f2f2;
    line-height: 27px;
    font-weight: bold;
  }
  &.bank {
    dt {
      margin-bottom: 20px;
    }
    dd {
      justify-content: flex-start;
      border: none;
      img {
        display: block;
        width: 32px;
        height: 32px;
        margin-right: 5px;
      }
    }
  }
`
export const StyleService = styled.div`
  margin-top: 50px;
  font-size: 12px;
  color: #9aa4c2;
  text-align: center;
  button {
    font-size: 12px;
    color: #136fef;
  }
`

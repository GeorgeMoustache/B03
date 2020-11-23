import React, { useContext } from 'react'
import styled from 'styled-components'
// context
import { VipContext } from './VipContext'
// components
import SubTitle from './SubTitle'
// utils
import { moneyFix } from '@utils'

const StyleDetailRange = styled.div`
  margin-bottom: 20px;
  padding-top: 20px;
  background: #fff;
`

const StyleTableWrapper = styled.div`
  display: flex;
`

const StyleLevelColumn = styled.ul`
  width: 33.33%;
  font-size: 12px;
  color: #414655;
  li {
    background: #f5f5f5;
    text-align: center;
    &:nth-child(odd) {
      background: #cbced8;
    }
    &.head {
      background: #d2b79c;
      line-height: 40px;
    }
    span {
      display: inline-flex;
      align-items: center;
      width: 57px;
      line-height: 40px;
      img {
        display: block;
        width: 23px;
        height: auto;
        margin-right: 5px;
      }
    }
  }
`

const StyleInfoColumn = styled.ul`
  width: 33.33%;
  li {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    font-size: 12px;
    color: #9aa4c2;
    line-height: 40px;
    &:nth-child(odd) {
      background: #f5f5f5;
    }
    &.head {
      background: #cbced8;
      font-size: 14px;
      color: #414655;
    }
  }
`

const DetailRange = () => {
  const { vipInfo, levelList } = useContext(VipContext)

  // 等級欄位
  const levelColumn = () => {
    return (
      <StyleLevelColumn>
        <li className='head'>VIP等級</li>
        {levelList.map((item, idx) => {
          return (
            <li key={idx}>
              <span>
                <img src={require(`@assets/images/vip/lv${item}.png`)} alt={`vip${idx}`} />
                vip{item}
              </span>
            </li>
          )
        })}
      </StyleLevelColumn>
    )
  }

  // 內容欄位
  const infoColumn = type => {
    return (
      <StyleInfoColumn>
        <li className='head'>{type === 'freq' ? '每日提款次數' : '每日提款额度'}</li>
        {vipInfo &&
          vipInfo.map((item, idx) => {
            return <li key={idx}>{type === 'freq' ? item.dayWithdrawalsTimes : moneyFix(item.dayWithdrawalsLimit)}</li>
          })}
      </StyleInfoColumn>
    )
  }

  return (
    <StyleDetailRange>
      <SubTitle title='提款额度' space />
      <StyleTableWrapper>
        {levelColumn()}
        {infoColumn('freq')}
        {infoColumn('range')}
      </StyleTableWrapper>
    </StyleDetailRange>
  )
}

export default DetailRange

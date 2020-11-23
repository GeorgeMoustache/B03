import React, { useContext } from 'react'
import styled from 'styled-components'
// context
import { VipContext } from './VipContext'
// components
import SubTitle from './SubTitle'
// utils
import { moneyFix } from '@utils'

const StyleDetailRate = styled.div`
  margin-top: 10px;
  padding: 20px 0;
  background: #fff;
`

const StyleTableWrapper = styled.div`
  display: flex;
`

const StyleLevelColumn = styled.ul`
  font-size: 12px;
  color: #414655;
  li {
    padding: 0 5px;
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
  flex-grow: 1;
  font-size: 12px;
  color: #9aa4c2;
  line-height: 40px;
  text-align: center;
  &:nth-child(odd) {
    color: #000;
  }
  li {
    background: #fff;
    &:nth-child(odd) {
      background: #f5f5f5;
    }
    &.head {
      font-size: 12px;
      background: #cbced8;
      color: #414655;
      span {
        display: block;
        width: 35px;
        margin: 0 auto;
        padding: 2px 0;
        line-height: 1.5;
        transform: scale(0.83);
      }
    }
  }
`

const DetailRate = () => {
  const { levelRate, levelList } = useContext(VipContext)

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
  const infoColumn = () => {
    return (
      levelRate &&
      levelRate.map((item, idx) => {
        return (
          <StyleInfoColumn key={idx}>
            {item.map((childItem, childIdx) => {
              if (typeof childItem === 'string') {
                return (
                  <li className='head' key={childIdx}>
                    {childItem.length <= 2 ? childItem : <span>{childItem}</span>}
                  </li>
                )
              } else {
                return <li key={childIdx}>{moneyFix(childItem)}%</li>
              }
            })}
          </StyleInfoColumn>
        )
      })
    )
  }

  return (
    <StyleDetailRate>
      <SubTitle title='返水比例' space />
      <StyleTableWrapper>
        {levelColumn()}
        {infoColumn()}
      </StyleTableWrapper>
    </StyleDetailRate>
  )
}

export default DetailRate

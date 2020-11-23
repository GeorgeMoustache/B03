import React, { useContext } from 'react'
import styled from 'styled-components'
// context
import { VipContext } from './VipContext'
// components
import SubTitle from './SubTitle'
// utils
import { moneyFix } from '@utils'

const StyleRightPromo = styled.div`
  margin-top: 10px;
  padding: 15px;
  background: #fff;
  .wrap {
    display: flex;
    flex-wrap: wrap;
    dl {
      width: 33.33%;
      padding: 10px;
      text-align: center;
      dt {
        margin-bottom: 3px;
        font-size: 16px;
        color: #d2b79c;
        font-weight: bold;
      }
      dd {
        font-size: 12px;
        color: #9aa4c2;
      }
    }
  }
`

const RightPromo = () => {
  const { gameRate, cardIdx } = useContext(VipContext)

  if (gameRate && cardIdx) {
    return (
      <StyleRightPromo>
        <SubTitle title={'VIP优惠'} />
        <div className='wrap'>
          {gameRate[cardIdx].map((item, idx) => {
            return (
              <dl key={idx}>
                <dt>{moneyFix(item.rate)}%</dt>
                <dd>{item.title}</dd>
              </dl>
            )
          })}
        </div>
      </StyleRightPromo>
    )
  } else {
    return null
  }
}

export default RightPromo

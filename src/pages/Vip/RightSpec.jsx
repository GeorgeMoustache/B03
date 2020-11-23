import React, { useContext } from 'react'
import styled from 'styled-components'
// context
import { VipContext } from './VipContext'
// components
import SubTitle from './SubTitle'
// assets
import iconBirthday from '@assets/images/vip/icon_birthday.png'
import iconQuota from '@assets/images/vip/icon_quota.png'
import iconRedenvelope from '@assets/images/vip/icon_redenvelope.png'
import iconUpgrade from '@assets/images/vip/icon_upgrade.png'
import iconWithdrawal from '@assets/images/vip/icon_withdrawal.png'
// utils
import { moneyFix } from '@utils'

const StyleRightSpec = styled.div`
  padding: 15px;
  background: #fff;
  .wrap {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 192px;
    dl {
      display: flex;
      align-items: center;
      width: 50%;
      padding: 10px 0;
      dt {
        margin-right: 10px;
        img {
          display: block;
          width: 36px;
          height: auto;
          margin: 0 auto;
        }
      }
      dd {
        b {
          display: block;
          font-size: 16px;
          color: #3e4354;
        }
        span {
          font-size: 12px;
          color: #9aa4c2;
        }
      }
    }
  }
`

const RightSpec = () => {
  const { vipInfo, cardIdx } = useContext(VipContext)

  if (vipInfo) {
    return (
      <StyleRightSpec>
        <SubTitle title={`VIP${cardIdx}尊享`} />
        <div className='wrap'>
          {vipInfo[cardIdx].dayWithdrawalsTimes !== 0 && (
            <dl>
              <dt>
                <img src={iconWithdrawal} alt='每日提款次数' />
              </dt>
              <dd>
                <b>{vipInfo[cardIdx].dayWithdrawalsTimes}</b>
                <span>每日提款次数</span>
              </dd>
            </dl>
          )}
          {vipInfo[cardIdx].promotionGift !== 0 && (
            <dl>
              <dt>
                <img src={iconUpgrade} alt='升级礼金(晋级自动发放)' />
              </dt>
              <dd>
                <b>{moneyFix(vipInfo[cardIdx].promotionGift)}</b>
                <span>升级礼金(晋级自动发放)</span>
              </dd>
            </dl>
          )}
          {vipInfo[cardIdx].monthGift !== 0 && (
            <dl>
              <dt>
                <img src={iconRedenvelope} alt='每月红包(1号和15号可领取)' />
              </dt>
              <dd>
                <b>{moneyFix(vipInfo[cardIdx].monthGift)}</b>
                <span>每月红包(1号和15号可领取)</span>
              </dd>
            </dl>
          )}
          {vipInfo[cardIdx].dayWithdrawalsLimit !== 0 && (
            <dl>
              <dt>
                <img src={iconQuota} alt='每日提款额度' />
              </dt>
              <dd>
                <b>{moneyFix(vipInfo[cardIdx].dayWithdrawalsLimit)}</b>
                <span>每日提款额度</span>
              </dd>
            </dl>
          )}
          {vipInfo[cardIdx].birthdayGift !== 0 && (
            <dl>
              <dt>
                <img src={iconBirthday} alt='生日礼金' />
              </dt>
              <dd>
                <b>{moneyFix(vipInfo[cardIdx].birthdayGift)}</b>
                <span>生日礼金</span>
              </dd>
            </dl>
          )}
        </div>
      </StyleRightSpec>
    )
  } else {
    return null
  }
}

export default RightSpec

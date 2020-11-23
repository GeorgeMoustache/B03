import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
// context
import { VipContext } from './VipContext'
// assets
import avatar from '@assets/images/common/avatar.png'
import progressBg from '@assets/images/vip/progress_bg.png'
import progressIcon from '@assets/images/vip/progress_icon.png'
// utils
import { moneyFix } from '@utils'

const StyleRightInfo = styled.div`
  position: relative;
  height: 225px;
  overflow: hidden;
  z-index: ${({ theme }) => theme.zIndex.content};
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    display: block;
    width: 200%;
    height: 225px;
    margin-left: -100%;
    background: linear-gradient(-135deg, #ffffff, #cfd8fa);
    border-radius: 0 0 50% 50%;
  }
  .wrap {
    position: relative;
    padding: 15px;
  }
`

const StyleAvatar = styled.div`
  position: relative;
  height: 110px;
  dl {
    display: flex;
    align-items: flex-start;
    dt {
      flex-shrink: 0;
      width: 48px;
      height: 48px;
      margin-right: 15px;
      background: url(${avatar}) center center no-repeat;
      background-size: 100% auto;
      text-indent: -9999px;
    }
    dd {
      display: flex;
      margin-top: 5px;
      span {
        display: block;
        font-size: 16px;
        color: #404455;
        font-weight: bold;
      }
      img {
        display: block;
        width: 40px;
        height: 16px;
        margin-left: 10px;
      }
    }
  }
  .medal {
    position: absolute;
    right: 0;
    top: 0;
    display: block;
    width: 33%;
    height: auto;
  }
`

const StyleProgress = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 15px;
  .label {
    flex-shrink: 0;
    width: 32px;
    border-radius: 7px;
    font-size: 12px;
    color: #fff;
    line-height: 14px;
    text-align: center;
    &.current {
      background: #d2b79c;
    }
    &.next {
      background: linear-gradient(#b9b0b9, #dde1e6);
    }
    span {
      display: block;
      transform: scale(0.8, 0.8);
    }
  }
  .bar-wrap {
    position: relative;
    flex-grow: 1;
    height: 8px;
    margin: 0 8px;
    background: url(${progressBg}) left center repeat-x #fff;
    background-size: auto 100%;
    border-radius: 4px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
    .bar {
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      margin: 0;
      background: #d2b79c;
      border: none;
      border-radius: 4px 0 0 4px;
      &.full {
        border-radius: 4px;
      }
    }
    .gold {
      position: absolute;
      top: -4px;
      display: block;
      width: 26px;
      height: auto;
    }
  }
`

const StyleInfo = styled.div`
  padding: 0 15px;
  font-size: 12px;
  color: #9aa4c2;
  p {
    display: flex;
    align-items: center;
    padding: 5px 0;
    &::before {
      content: '';
      display: block;
      width: 4px;
      height: 4px;
      margin-right: 8px;
      background: #9aa4c2;
      border-radius: 50%;
    }
    b {
      padding-right: 5px;
      color: #414655;
    }
  }
`

const VipInfo = () => {
  const { playerInfo } = useContext(VipContext)
  const memberInfo = useSelector(state => state.memberInfo)
  const { loginName } = memberInfo

  if (playerInfo) {
    const {
      currentStarCode,
      nextStarCode,
      promotionRecharge,
      promotionValidIntegral,
      alreadyPromotionRecharge,
      alreadyPromotionValidIntegral,
      percent,
    } = playerInfo
    return (
      <StyleRightInfo>
        <div className='wrap'>
          <StyleAvatar>
            <dl>
              <dt>avatar</dt>
              <dd>
                <span>{loginName}</span>
                <img
                  src={require(`@assets/images/home/member/icon__member-level_${currentStarCode}.png`)}
                  alt={`vip${currentStarCode}`}
                />
              </dd>
            </dl>
            <img
              src={require(`@assets/images/vip/lv${currentStarCode}_current.png`)}
              className='medal'
              alt={`vip${currentStarCode}`}
            />
          </StyleAvatar>
          <StyleProgress>
            <div className='label current'>
              <span>VIP{currentStarCode}</span>
            </div>
            <div className='bar-wrap'>
              <hr
                className={`bar ${currentStarCode === 10 && 'full'}`}
                style={{ width: `${currentStarCode !== 10 ? percent : 100}%` }}
              />
              {currentStarCode !== 10 && (
                <img className='gold' src={progressIcon} alt='gold' style={{ left: `${percent}%` }} />
              )}
            </div>
            <div className='label next'>{currentStarCode !== 10 && <span>VIP{nextStarCode}</span>}</div>
          </StyleProgress>
          <StyleInfo>
            {promotionRecharge !== 0 && (
              <p>
                當前存款(元)：<b>{moneyFix(alreadyPromotionRecharge)}</b>/{moneyFix(promotionRecharge)}
              </p>
            )}
            {promotionValidIntegral !== 0 && currentStarCode !== 10 ? (
              <p>
                當前流水(元)：<b>{moneyFix(alreadyPromotionValidIntegral)}</b>/{moneyFix(promotionValidIntegral)}
              </p>
            ) : null}
          </StyleInfo>
        </div>
      </StyleRightInfo>
    )
  } else {
    return null
  }
}

export default VipInfo

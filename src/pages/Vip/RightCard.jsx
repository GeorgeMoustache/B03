import React, { useContext, useEffect, useRef } from 'react'
import styled from 'styled-components'
// context
import { VipContext } from './VipContext'
// plugins
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// utils
import { moneyFix } from '@utils'

const StyleRightCard = styled.div`
  & .pagination {
    padding: 0 30px;
    font-size: 12px;
    color: #9aa4c2;
    text-align: right;
    span {
      color: #414655;
    }
  }
`

const StyleTextSlider = styled.div`
  margin-bottom: 45px;
  .text-item {
    position: relative;
    text-align: center;
    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      margin-top: -1px;
      display: block;
      width: 100%;
      height: 1px;
      background: #bec4cd;
    }
    span {
      position: relative;
      display: block;
      width: 38px;
      margin: 0 auto;
      background: #d3d5e0;
      border: 1px solid #bec4cd;
      border-radius: 15px;
      font-size: 12px;
      color: #414655;
      line-height: 20px;
      font-weight: bold;
      z-index: ${({ theme }) => theme.zIndex.content};
    }
  }
  /* active */
  & .slick-current .text-item span {
    background: #737a92;
    border-width: 3px;
    color: #fff;
    line-height: 16px;
  }
`

const StyleCardSlider = styled.div`
  margin-bottom: 25px;
  .card-item {
    position: relative;
    padding: 0 10px;
    .card {
      display: block;
      width: 100%;
      height: auto;
      border-radius: 5px;
    }
    .medal {
      position: absolute;
      right: 5%;
      top: 0;
      display: block;
      max-width: 30%;
      height: auto;
    }
    .label {
      position: absolute;
      left: 10%;
      top: 20%;
      font-size: 30px;
      color: #fff;
      font-weight: bold;
      font-style: italic;
    }
    .info {
      position: absolute;
      left: 20px;
      bottom: 8px;
      li {
        padding: 3px 0;
        font-size: 12px;
        color: #404455;
      }
    }
  }
`

const RightCard = () => {
  const { levelList, playerInfo, vipInfo, cardIdx, setCardIdx } = useContext(VipContext)
  const textSlider = useRef('textSlider')
  const cardSlider = useRef('cardSlicer')

  // 點擊 Label 觸發卡片滑動
  const handleClickChange = idx => {
    setCardIdx(idx)
    cardSlider.current.slickGoTo(idx)
  }

  // 卡片滑動觸發 Label 改變
  const handleSwipeChange = idx => {
    setCardIdx(idx)
    textSlider.current.slickGoTo(idx)
  }

  // 防止 UC 手指滑動觸發回上一頁
  useEffect(() => {
    const sliderBox = document.getElementById('slider')
    sliderBox.addEventListener(
      'touchmove',
      e => {
        e.preventDefault()
      },
      false,
    )
  }, [])

  return (
    <StyleRightCard id='slider'>
      {levelList && playerInfo && vipInfo ? (
        <>
          <StyleTextSlider>
            <Slider
              ref={textSlider}
              slidesToShow={5}
              slidesToScroll={1}
              infinite={true}
              dots={false}
              arrows={false}
              initialSlide={cardIdx}
              swipe={false}
              focusOnSelect={true}
            >
              {levelList.map((item, idx) => {
                return (
                  <div onClick={() => handleClickChange(idx)} className='text-item' key={item}>
                    <span>Lv{item}</span>
                  </div>
                )
              })}
            </Slider>
          </StyleTextSlider>
          <StyleCardSlider>
            <Slider
              ref={cardSlider}
              slidesToShow={1}
              slidesToScroll={1}
              infinite={true}
              dots={false}
              arrows={false}
              centerMode={true}
              centerPadding={'20px'}
              initialSlide={cardIdx}
              afterChange={handleSwipeChange}
            >
              {vipInfo &&
                levelList.map(item => {
                  const { currentStarCode } = playerInfo
                  return (
                    <div className='card-item' key={item}>
                      <img
                        className='card'
                        src={require(`@assets/images/vip/cardbg_${
                          item <= currentStarCode ? 'current' : 'default'
                        }.png`)}
                        alt={`vip${currentStarCode}`}
                      />
                      <img
                        className='medal'
                        src={require(`@assets/images/vip/lv${item}_${
                          item <= currentStarCode ? 'current' : 'default'
                        }.png`)}
                        alt={`vip${currentStarCode}`}
                      />
                      <div className='label'>VIP{item}</div>
                      <ul className='info'>
                        {vipInfo[cardIdx].promotionRecharge !== 0 && (
                          <li>累计存款：{moneyFix(vipInfo[cardIdx].promotionRecharge)}</li>
                        )}
                        {vipInfo[cardIdx].promotionValidIntegral !== 0 && (
                          <li>流水要求：{moneyFix(vipInfo[cardIdx].promotionValidIntegral)}</li>
                        )}
                        {vipInfo[cardIdx].relegationValidIntegral !== 0 && (
                          <li>保級流水：{moneyFix(vipInfo[cardIdx].relegationValidIntegral)}(三个月内)</li>
                        )}
                      </ul>
                    </div>
                  )
                })}
            </Slider>
          </StyleCardSlider>
          <div className='pagination'>
            <span>{cardIdx + 1}</span>/{levelList.length}
          </div>
        </>
      ) : null}
    </StyleRightCard>
  )
}

export default RightCard

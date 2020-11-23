import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
// context
import { EntryContext } from './EntryContext'
// assets
import iconClose from '@assets/images/entry/button_close.png'
import iconRefresh from '@assets/images/entry/button_refresh.png'
// api
import { checkSliderVerify, getSliderVerify } from '@api'
// actions
import { toastMsg, loadingClose } from '@actions'

const StyleSliderVerify = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  > .outer {
    background: #fff;
    border-radius: 15px;
    > .title {
      position: relative;
      padding: 14px;
      border-bottom: 1px solid #f8f8f8;
      font-size: 16px;
      color: #404455;
      font-weight: bold;
      text-align: center;
      .close {
        position: absolute;
        right: 14px;
        top: 14px;
        width: 16px;
        height: 16px;
        background: url(${iconClose}) center center no-repeat;
        background-size: 100% auto;
      }
    }
    .inner {
      padding: 14px;
      .image-container {
        position: relative;
        width: 226px;
        height: 130px;
        margin-bottom: 15px;
        overflow: hidden;
        .puzzle {
          position: absolute;
          left: 0;
          top: 0;
          width: 44px;
          height: 130px;
        }
        .reload {
          position: absolute;
          right: 5px;
          top: 5px;
          width: 20px;
          height: 20px;
          background: url(${iconRefresh}) center center no-repeat;
          background-size: 100% auto;
        }
      }
      .slider-wrap {
        position: relative;
        background: #7d87a5;
        border-radius: 10px;
        font-size: 14px;
        color: #fff;
        line-height: 20px;
        text-align: center;
        .slider-button {
          position: absolute;
          left: 0;
          top: -3px;
          width: 26px;
          height: 26px;
          background: linear-gradient(to bottom, #dccab8, #d2b496);
          border-radius: 50%;
          box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
          &::before {
            content: '';
            position: absolute;
            left: 3px;
            top: 3px;
            width: 20px;
            height: 20px;
            background: #fff;
            border-radius: 50%;
          }
        }
      }
    }
  }
`

const SliderVerify = () => {
  const dispatch = useDispatch()
  const [state, setState] = useState({ bgImage: '', sliderImage: '', lockEnabled: true, offset: 0 })
  const { sliderVerify, setSliderVerify } = useContext(EntryContext)

  //滑塊驗證初始化
  const init = () => {
    getSliderVerify()
      .then(res => {
        const { bgImage, sliderImage } = res.data.data
        setState({ lockEnabled: true, offset: 0, bgImage: bgImage, sliderImage: sliderImage })
      })
      .finally(() => dispatch(loadingClose()))
  }

  //開始拖曳
  const handleTouchStart = () => setState({ ...state, lockEnabled: false })

  //拖曳中
  const handleTouchMove = e => {
    if (state.lockEnabled) return
    //拖曳按鈕大小
    const sliderWidth = e.target.offsetWidth
    //圖片元件
    const imageContainer = document.getElementById('image-container')
    //拖曳區塊與裝置邊界值
    const fixOffset = imageContainer.offsetLeft + sliderWidth / 2
    //最大拖曳距離
    const maxRange = imageContainer.offsetWidth - sliderWidth
    //實際拖曳距離
    let distance = e.touches[0].clientX - fixOffset
    //設定拖曳邊界
    if (distance <= 0) distance = 0
    if (distance >= maxRange) distance = maxRange
    setState({ ...state, offset: distance })
  }

  //放開拖曳
  const handleTouchMoveEnd = () => {
    setState({ ...state, lockEnabled: true })
    checkSliderVerify(state.offset)
      .then(res => {
        const { code } = res.data
        if (code !== 0) {
          dispatch(toastMsg('验证失败'))
          init()
        } else {
          handleSetPass()
        }
      })
      .finally(() => dispatch(loadingClose()))
  }

  // 驗證滑塊驗證通過
  const handleSetPass = () => setSliderVerify({ ...sliderVerify, enabled: false, pass: true })

  // 關閉滑塊驗證
  const handleCloseVerify = () => setSliderVerify({ ...sliderVerify, enabled: false })

  useEffect(() => {
    init()
    // eslint-disable-next-line
  }, [])

  if (sliderVerify) {
    return (
      <StyleSliderVerify>
        <div className='outer'>
          <div className='title'>
            请完成验证
            <button className='close' onClick={handleCloseVerify} />
          </div>
          <div className='inner'>
            <div
              id='image-container'
              className='image-container'
              style={{ backgroundImage: `url(data:image/png;base64,${state.bgImage})` }}
            >
              <div
                className='puzzle'
                style={{
                  left: `${state.offset}px`,
                  backgroundImage: `url(data:image/png;base64,${state.sliderImage})`,
                }}
              />
              <button className='reload' onClick={init} />
            </div>
            <div className='slider-wrap' onTouchMove={handleTouchMove}>
              <div className='slider-bar'>按住滑块，拖动完成拼图</div>
              <div
                className='slider-button'
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchMoveEnd}
                style={{ left: `${state.offset}px` }}
              />
            </div>
          </div>
        </div>
      </StyleSliderVerify>
    )
  } else {
    return null
  }
}

export default SliderVerify

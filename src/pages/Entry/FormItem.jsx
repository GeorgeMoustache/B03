import React, { useState } from 'react'
import styled from 'styled-components'
// assets
import iconClear from '@assets/images/entry/icon_clear.png'
import iconEyes from '@assets/images/entry/icon_eyes.png'
import iconEyesHide from '@assets/images/entry/icon_eyes_hide.png'
import iconHint from '@assets/images/entry/hint.svg'

const StyleFormItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 15px;
  border-radius: 25px;
  img {
    display: block;
    width: 18px;
    height: 18px;
    margin-right: 10px;
  }
  input {
    flex-grow: 1;
    width: 100%;
    padding: 0;
    background: none;
    border: none;
    font-size: 12px;
    color: ${({ theme }) => theme.color.white};
    line-height: 45px;
    &::-webkit-input-placeholder {
      color: ${({ theme }) => theme.color.white};
    }
  }
  .hint {
    position: absolute;
    left: 40px;
    bottom: 100%;
    margin-bottom: 4px;
    padding: 3px 8px;
    background: #9aa4c2;
    border-radius: 5px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.white};
    &::after {
      content: '';
      position: absolute;
      left: 10px;
      top: 100%;
      width: 5px;
      height: 4px;
      background: url(${iconHint}) center center no-repeat;
      background-size: 100% auto;
    }
  }
  .control {
    width: 18px;
    height: 18px;
    margin-left: 10px;
    border-radius: 50%;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 17px auto;
    &.clear {
      background-image: url(${iconClear});
    }
    &.eyes {
      background-image: url(${iconEyes});
      &.hide {
        background-image: url(${iconEyesHide});
      }
    }
  }
  .verify {
    margin-right: -10px;
  }
`

const FormItem = ({ children, hint, bgColor }) => {
  const [hintEnabled, setHintEnabled] = useState(false)

  //提示文字開關
  const handleHintShow = () => setHintEnabled(true)
  const handleHintHide = () => setHintEnabled(false)

  return (
    <StyleFormItem onFocus={handleHintShow} onBlur={handleHintHide} style={{background: bgColor}}>
      {hint && hintEnabled ? <div className='hint'>{hint}</div> : null}
      {children}
    </StyleFormItem>
  )
}

export default FormItem

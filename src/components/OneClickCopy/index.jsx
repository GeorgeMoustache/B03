import React from 'react'
import styled from 'styled-components'
// Constants
import { ACCESS_MODE } from '@constants/storage'

const copy = require('clipboard-copy')

const StyleOneClickCopy = styled.button`
  border: 1px solid #d2b79c;
  border-radius: 5px;
  font-size: 12px;
  color: #d2b79c;
  &.largest { 
    width: 79px;
    height: 34px;
    line-height: 34px;
  }
  &.large { 
    width: 66px;
    height: 27px;
    line-height: 27px;
  }
  &.small { 
    width: 34px;
    height: 18px;
    line-height: 18px;
  }
`

const OneClickCopy = ({ theme, copyString }) => {

  const handleCopy = (copyString) => () => {
    copy(copyString)

    // 針對安卓 app 端無法執行複製功能的 hack
    const accessMode = localStorage.getItem(ACCESS_MODE)
    if (accessMode === 'APP') return (window.location.href = `b03://androidCopy=${copyString}`)
  }
  return <StyleOneClickCopy className={theme} onClick={handleCopy(copyString)}>复制</StyleOneClickCopy>
}

export default OneClickCopy

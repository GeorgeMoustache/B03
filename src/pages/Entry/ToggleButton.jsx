import React, { useContext } from 'react'
import styled from 'styled-components'
// context
import { EntryContext } from './EntryContext'

const StyleToggleButton = styled.button`
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  color: ${({ theme }) => theme.color.white};
  img {
    display: block;
    width: 28px;
    height: auto;
    margin-bottom: 10px;
  }
  span {
    display: block;
    width: 14px;
    font-size: 14px;
    line-height: 25px;
    font-weight: bold;
  }
`

const ToggleButton = ({ icon, text, bgColor }) => {
  const { setEntryType } = useContext(EntryContext)
  const type = text === '注册新用户' ? 1 : 0
  
  // 切換模式 (登入 or 註冊)
  const handleToggleType = () => setEntryType(type)

  return (
    <StyleToggleButton onClick={handleToggleType} style={{background: bgColor}}>
      <img src={icon} alt={text} />
      <span>{text}</span>
    </StyleToggleButton>
  )
}

export default ToggleButton

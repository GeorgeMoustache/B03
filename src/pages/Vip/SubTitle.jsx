import React from 'react'
import styled from 'styled-components'

const StyleSubTitle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 25px;
  font-size: 16px;
  color: #414655;
  font-weight: bold;
  &::before {
    content: '';
    display: block;
    width: 3px;
    height: 16px;
    margin-right: 10px;
    background: linear-gradient(#d2b496, #dccab8);
  }
  &.space {
    padding: 0 15px;
  }
`

const SubTitle = ({ title, space }) => {
  return <StyleSubTitle className={space ? 'space' : ''}>{title}</StyleSubTitle>
}

export default SubTitle

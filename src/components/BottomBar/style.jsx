import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const BottomBar = styled.footer`
  align-items: center;
  background: #ffffff;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
  bottom: 0;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  display: flex;
  flex-flow: row nowrap;
  height: 48px;
  left: 0;
  position: fixed;
  width: 100%;
`

export const BottomBarItem = styled(Link)`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 auto;
`

export const Icon = styled.img`
  height: 24px;
  margin-bottom: 2px;
  object-fit: contain;
  width: 24px;
`

export const Label = styled.span`
  color: ${({ isActived }) => (isActived ? '#d3b498' : '#9aa4c2')};
  font-size: 12px;
`

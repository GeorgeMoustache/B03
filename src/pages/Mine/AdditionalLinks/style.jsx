import styled from 'styled-components'
// components
import { LinkItem } from './LinkItem/style'

export const LinksGroup = styled.div`
  background: #ffffff;
  margin-top: 10px;
  width: 100%;
  & > ${LinkItem} :nth-of-type(n + 1):not(:only-of-type):not(:last-of-type) {
    border-bottom: solid 1px #f2f2f2;
  }
`

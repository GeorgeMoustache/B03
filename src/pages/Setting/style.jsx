import styled from 'styled-components'
// assets
import visitMoreButtonImg from '@assets/images/common/icon__arrow_visit-more.png'

export const Container = styled.div`
  align-items: center;
  background: #f8f8f8;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  justify-content: flex-start;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
`

export const MainContent = styled.div`
  flex: 1 1 0;
  height: 100%;
  overflow-y: scroll;
  padding-bottom: ${({ theme: { space } }) => `${space.bottomBarHeight + 10}px`};
  width: 100%;

  & > div:nth-child(n) {
    margin-top: 10px;
  }
`

export const ListItemContent = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: space-between;
  width: 100%;

  &:after {
    background-image: url(${visitMoreButtonImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    height: 9px;
    width: 6px;
  }

  &:nth-child(n + 1):not(:last-child) {
    border-bottom: #f2f2f2 1px solid;
  }
`

export const ListItem = styled.div`
  background: #fff;
  color: #333333;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  height: 50px;
  letter-spacing: normal;
  line-height: normal;
  padding: 0 14px;

  &:nth-child(n + 1):not(:last-child) > ${ListItemContent} {
    border-bottom: #f2f2f2 1px solid;
  }
`

export const logoutButton = styled.button`
  background: #fff;
  color: #404454;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  height: 50px;
  letter-spacing: normal;
  line-height: 50px;
  padding: 0 14px;
  text-align: center;
  width: 100%;
`

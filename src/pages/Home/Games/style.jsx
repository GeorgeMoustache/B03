import styled from 'styled-components'
// assets
import NavBgImg from '@assets/images/home/nav/bg__nav.png'
import NavBgImgActive from '@assets/images/home/nav/bg__nav_active.png'

export const GamesContainer = styled.main`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 1 auto;
  overflow: hidden;
  width: 100%;
  & > :nth-child(n + 2) {
    margin-left: 10px;
  }
`

export const GameEmpty = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  left: 50%;
  position: absolute;
  top: 42px;
  transform: translateX(-50%);
  & > img {
    height: auto;
    margin-bottom: 25px;
    width: 86px;
  }
  & > span {
    color: #d8d8d8;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    letter-spacing: normal;
    line-height: normal;
  }
`

export const GameList = styled.main`
  flex: 1 1 0;
  overflow-y: scroll;
  padding: 10px 14px 0 5px;
  padding-bottom: ${({ theme: { space } }) => `${space.bottomBarHeight + 10}px`};
  position: relative;
`

export const GameListItem = styled.button`
  border-radius: 6px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  padding: 0;
  overflow: hidden;

  &:nth-child(n):not(:last-child) {
    margin-bottom: 10px;
  }
  & > img {
    display: block;
    height: auto;
    width: 100%;
  }
`

export const Nav = styled.nav`
  flex: 0 0 auto;
  overflow-y: scroll;
  padding: 10px 5px 0 14px;
  padding-bottom: ${({ theme: { space } }) => `${space.bottomBarHeight + 10}px`};
`
export const NavItemLabel = styled.span`
  font-size: 12px;
  font-weight: medium;
  position: absolute;
  right: 2px;
  top: 50%;
  transform: translateY(-50%);
`

export const NavItem = styled.button`
  align-items: center;
  background-image: ${({ active }) => (active ? `url(${NavBgImgActive})` : `url(${NavBgImg})`)};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px;
  box-shadow: ${({ active }) => (active ? '0 1px 6px 0 rgba(168, 135, 102, 0.5)' : '0 1px 6px 0 rgba(0, 0, 0, 0.2)')};
  display: flex;
  height: 40px;
  justify-content: flex-start;
  overflow: hidden;
  padding-right: 2px;
  position: relative;
  white-space: nowrap;
  width: 60px;

  &:nth-child(n):not(:last-child) {
    margin-bottom: 10px;
  }

  & > ${NavItemLabel} {
    color: ${({ active }) => (active ? '#fff' : '#9ca5c3')};
  }
`

export const NavItemIcon = styled.img`
  height: 40px;
  width: auto;
`

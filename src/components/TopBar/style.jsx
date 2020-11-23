import styled from 'styled-components'

export const TopBar = styled.header`
  align-items: center;
  background-color: ${({ transparent }) => !transparent && '#ffffff'};
  position: relative;
  width: 100%;
  z-index: ${({theme}) => theme.zIndex.content}
`

export const TopBarMain = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 44px;
  padding: 0 14px;
`

export const TopBarLeftArea = styled.div`
  align-items: center;
  display: flex;
  & > :nth-child(n + 2) {
    margin-left: 8px;
  }
`

export const TopBarRightArea = styled.div`
  align-items: center;
  display: flex;
  margin-left: auto;
  & > :nth-last-child(n + 2) {
    margin-right: 8px;
  }
`

export const Title = styled.h2`
  color: ${({ white }) => (white ? '#ffffff' : '#414655')};
  font-size: 18px;
  font-weight: 500;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
`

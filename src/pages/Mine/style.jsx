import styled from 'styled-components'

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
`

import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  overflow: hidden;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
`

export const MainContainer = styled.main`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 1 auto;
  overflow: hidden;
  width: 100%;
`

export const MainContent = styled.main`
  flex: 1 1 0;
`

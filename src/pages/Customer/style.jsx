import styled from 'styled-components'

export const Container = styled.div`
  background: #f8f8f8;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;

  &::before {
    background-image: radial-gradient(circle at 7% 85%, #dac5ae, #b69d85 107%);
    border-radius: 0 0 50% 50%;
    content: '';
    display: block;
    height: 172px;
    left: 50%;
    margin-left: -100%;
    position: absolute;
    top: -5%;
    width: 200%;
  }
`

export const MainContent = styled.div`
  flex: 1 1 0;
  height: 100%;
  overflow-y: scroll;
  padding: 14px 0 10px;
  position: relative;
  width: 100%;
`

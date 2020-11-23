import styled from 'styled-components'

export const Container = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 81px;
  padding: 0 14px;
  width: 100%;
`

export const LinkItem = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 0;
  height: 100%;
  justify-content: center;
  padding: 10px 0;
  & > img {
    height: 36px;
    margin-bottom: 6px;
    width: 36px;
  }
  & > span {
    color: #3e4354;
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
  }
`

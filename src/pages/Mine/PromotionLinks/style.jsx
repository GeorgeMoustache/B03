import styled from 'styled-components'

export const Container = styled.div`
  background: #ffffff;
  padding: 15px 14px 10px;
  width: 100%;
`

export const MainContent = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: row nowrap;
  padding: 0 14px;
  width: 100%;
`

export const LinkItem = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  flex: 1 1 0;
`

export const Icon = styled.img`
  height: 64px;
  width: 64px;
`

export const Title = styled.h5`
  color: #3e4354;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;
`

export const SubTitle = styled.span`
  color: #9aa4c2;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  text-transform: uppercase;
`

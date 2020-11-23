import styled from 'styled-components'

export const StyleSponsor = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 38px;
`

export const StyleList = styled.ul`
  flex-grow: 1;
  padding: 14px;
  overflow: auto;
`

export const StyleListItem = styled.li`
  position: relative;
  margin-bottom: 10px;
  border-radius: 6px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: auto;
  }
  &::after {
    content: '查看详情';
    position: absolute;
    right: 40px;
    bottom: 10px;
    display: block;
    width: 74px;
    background: linear-gradient(to right, #dccab8, #d2b496);
    border-radius: 5px;
    font-size: 12px;
    color: #FFF;
    line-height: 26px;
    text-align: center;
  }
`

export const StyleDetail = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const StyleFrame = styled.iframe`
  flex-grow: 1;
  width: 100%;
`
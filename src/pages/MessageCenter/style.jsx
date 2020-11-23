import styled from 'styled-components'
// assets
import systemMessageImg from '@assets/images/messageCenter/icon__system-message.png'

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
`

export const MainContent = styled.div`
  flex: 1 1 0;
  height: 100%;
  overflow-y: scroll;
  padding: 14px 0 10px;
  position: relative;
  width: 100%;
`

export const List = styled.div`
  list-style-type: none;
  width: 100%;
`

export const ListItem = styled.div`
  background: #ffffff;
  display: flex;
  padding: 14px;
  border-bottom: 1px solid #f2f2f2;
  max-height: 68px;
  transition: max-height 0.5s ease-in-out;

  &.isExpand {
    max-height: 99999999vh;
  }

  &::before {
    background: url(${systemMessageImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    flex: 0 0 auto;
    height: 32px;
    margin-right: 10px;
    width: 32px;
  }
`

export const ListItemContent = styled.div`
  overflow: hidden;
  width: 100%;
`

export const Title = styled.h5`
  color: #9aa4c2;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;
`

export const Content = styled.pre.attrs(({ isTruncate }) => {
  if (isTruncate) {
    return {
      style: {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      },
    }
  }
})`
  color: #414655;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  white-space: pre-wrap;
  word-wrap: break-word;
`

export const ToggleCollapseButton = styled.button`
  align-self: flex-end;
  flex: 0 0 16px;
  height: 16px;
  margin-left: 16px;
  width: 16px;

  & > img {
    width: 100%;
    height: auto;
  }
`

export const EmptyContent = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  & > img {
    height: 180px;
    margin-bottom: 10px;
    width: 180px;
  }
  & > span {
    color: #cbced8;
    display: block;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    font-weight: 500;
    letter-spacing: normal;
    line-height: normal;
    text-align: center;
  }
`

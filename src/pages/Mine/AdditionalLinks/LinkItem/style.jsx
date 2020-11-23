import styled from 'styled-components'
// assets
import visitMoreButtonImg from '@assets/images/common/icon__arrow_visit-more.png'

export const LinkItem = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-flow: row nowrap;
  height: 50px;
  padding: 0 24px;
  width: 100%;
`

export const LinkItemImg = styled.img`
  height: 32px;
  margin-right: 6px;
  width: 32px;
`

export const LinkItemTitle = styled.h5`
  color: #414655;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-right: 10px;
`

export const LinkItemSubTitle = styled.p`
  color: #9aa4c2;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-left: auto;
  margin-right: 10px;
  text-align: right;
`

// 「>」，示意閱覽更多的按鈕
export const ButtonVisitMore = styled.button`
  background-image: url(${visitMoreButtonImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 9px;
  width: 6px;
`

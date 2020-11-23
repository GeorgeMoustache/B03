import styled from 'styled-components'

export const Logo = styled.img`
  height: 25px;
  width: auto;
`

export const TopBarButton = styled.button`
  background-image: ${({ imgSrc }) => `url(${imgSrc})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 25px;
  width: 25px;
`
export const FeedbackButton = styled.button`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  color: #ffffff;
`

export const VipButton = styled.button`
  font-size: 18px;
  color: #404455;
`

export const TutorialButton = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  & > span {
    font-size: 18px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #414655;
    margin-right: 5px;
  }
`

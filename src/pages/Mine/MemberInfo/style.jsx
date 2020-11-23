import styled from 'styled-components'
// assets
import visitMoreButtonImg from '@assets/images/common/icon__arrow_visit-more.png'

// 會員資訊的容器
export const MemberInfoContainer = styled.div`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 auto;
  height: 90px;
  padding: 0 14px;
  width: 100%;
`

// 會員大頭
export const MemberAvatar = styled.img`
  background: lightgray;
  border-radius: 50%;
  height: 70px;
  margin-right: 15px;
  width: 70px;
`

// 點擊導向登入／註冊的按鈕
export const LoginRegisterButton = styled.button`
  align-self: center;
  color: #404455;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;
`

// 「>」，示意閱覽更多的按鈕
export const ButtonVisitMore = styled.button`
  background-image: url(${visitMoreButtonImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 9px;
  margin-left: auto;
  width: 6px;
`

// 登入之後，顯示會員名稱以及會員等級icon
export const MemberUserName = styled.h5`
  color: #404455;
  display: flex;
  flex-flow: row nowrap;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: 16px;

  &::after {
    background-image: ${({ level = 0 }) => {
      // eslint-disable-next-line
      return level != undefined && `url(${require(`@assets/images/home/member/icon__member-level_${level}.png`)})`
    }};
    background-size: contain;
    content: '';
    height: 16px;
    margin-left: 10px;
    width: 40px;
  }
`

// 登入之後，顯示加入天數
export const MemberAdditionalInfo = styled.p`
  color: #9aa4c2;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  margin-top: 5px;
`

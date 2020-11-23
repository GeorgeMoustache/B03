import styled from 'styled-components'

export const MemberContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  flex: 0 0 53px;
  justify-content: space-between;
  padding: 0 14px;
  width: 100%;
`

export const MemberActionContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;

  & > :nth-child(n + 2) {
    margin-left: 14px;
  }
`

export const MemeberAction = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;

  & > img {
    height: 36px;
    margin-bottom: 1px;
    width: 36px;
  }

  & > span {
    color: #b1987f;
    font-size: 12px;
    font-weight: medium;
    text-align: center;
  }
`

export const MemberInfoLoggedIn = styled.div``

export const MemberUserName = styled.h5`
  color: #9aa4c2;
  display: flex;
  flex-flow: row nowrap;
  font-size: 12px;
  line-height: 16px;

  &::after {
    background-image: ${({ level = 0 }) => {
      // eslint-disable-next-line
      return level != undefined && `url(${require(`@assets/images/home/member/icon__member-level_${level}.png`)})`
    }};
    background-size: contain;
    content: '';
    height: 16px;
    margin-left: 3px;
    width: 40px;
  }
`

export const MemberVipLevel = styled.img`
  height: 16px;
  margin-left: 3px;
  width: 40px;
`

export const MemberAccountBalanceContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 5px;
`

export const MemberAccountBalance = styled.span`
  color: #414655;
  font-size: 16px;

  &::before {
    content: '¥';
  }
`

export const SquareIcon = styled.button.attrs(({ size = 14 }) => ({
  style: {
    width: `${size}px`,
    height: `${size}px`,
  },
}))``

export const MemberInfoUnLoggedIn = styled.button`
  text-align: left;

  & > h5 {
    color: #404455;
    font-size: 16px;
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-height: normal;
    margin-bottom: 5px;
  }

  & > span {
    color: #9ca5c3;
    font-size: 12px;
    font-stretch: normal;
    font-style: normal;
    font-weight: normal;
    letter-spacing: normal;
    line-height: normal;
  }
`

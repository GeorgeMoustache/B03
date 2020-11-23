import styled from 'styled-components'
// assets
import iconTime from '@assets/images/discount/icon_time.png'

export const StyleDiscount = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const StyleListWrapper = styled.div`
  flex-grow: 1;
  padding: 10px 14px 48px 14px;
  overflow: auto;
`

export const StyleListItem = styled.button`
  position: relative;
  display: block;
  width: 100%;
  margin-bottom: 10px;
  img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 6px;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  }
`

export const StyleLabel = styled.div`
  position: absolute;
  left: -5px;
  top: 6px;
  width: 83px;
  padding-left: 8px;
  font-size: 14px;
  color: #fff;
  line-height: 20px;
  &::before,
  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-color: transparent;
  }
  &::before {
    left: 0;
    top: 100%;
    border-width: 5px 0 0 5px;
  }
  &::after {
    left: 100%;
    top: 0;
    border-width: 20px 9px 0 0;
  }
  /* TJYH */
  &.purple {
    background: #b19fff;
    &::before {
      border-top-color: #5a47ae;
    }
    &::after {
      border-top-color: #b19fff;
    }
  }
  /* BBSYH */
  &.pink {
    background: #da91de;
    &::before {
      border-top-color: #a561a9;
    }
    &::after {
      border-top-color: #da91de;
    }
  }
  /* JGGYH */
  &.red {
    background: #de9191;
    &::before {
      border-top-color: #bf6868;
    }
    &::after {
      border-top-color: #de9191;
    }
  }
  /* FHYH */
  &.darkblue {
    background: #7a95d0;
    &::before {
      border-top-color: #1e3b7a;
    }
    &::after {
      border-top-color: #7a95d0;
    }
  }
  /* ZCSCJYH */
  &.lightblue {
    background: #84e1e7;
    &::before {
      border-top-color: #348287;
    }
    &::after {
      border-top-color: #84e1e7;
    }
  }
  /* VIPCS */
  &.blue {
    background: #77b1e1;
    &::before {
      border-top-color: #588fbd;
    }
    &::after {
      border-top-color: #77b1e1;
    }
  }
  /* ZCSYH */
  &.yellow {
    background: #ffdd71;
    &::before {
      border-top-color: #8c721d;
    }
    &::after {
      border-top-color: #ffdd71;
    }
  }
  /* ZZSYH */
  &.brown {
    background: #a38e76;
    &::before {
      border-top-color: #735d43;
    }
    &::after {
      border-top-color: #a38e76;
    }
  }
  /* HBYYH */
  &.darkyellow {
    background: #ead392;
    &::before {
      border-top-color: #88753f;
    }
    &::after {
      border-top-color: #ead392;
    }
  }
  /* SCSYH */
  &.green {
    background: #89b76c;
    &::before {
      border-top-color: #346514;
    }
    &::after {
      border-top-color: #89b76c;
    }
  }
  /* YQPYYH */
  &.lightgreen {
    background: #c4de80;
    &::before {
      border-top-color: #5a701e;
    }
    &::after {
      border-top-color: #c4de80;
    }
  }
  /* others */
  &.bluegreen {
    background: #90ddc1;
    &::before {
      border-top-color: #6eaf97;
    }
    &::after {
      border-top-color: #90ddc1;
    }
  }
`

export const StyleTime = styled.div`
  position: absolute;
  left: 0;
  bottom: 8px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  background: #FFF;
  border-radius: 0 10px 10px 0;
  font-size: 12px;
  color: #414655;
  line-height: 20px;
  &::before {
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    margin-right: 5px;
    background: url(${iconTime}) center center no-repeat;
    background-size: 100% auto;
  }
`

export const StyleDiscountDetail = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 58px;
  iframe {
    flex-grow: 1;
  }
`
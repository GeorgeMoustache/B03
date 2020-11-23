import styled from 'styled-components'
// assets
import bodyBg from '@assets/images/joinus/bg.png'
import iconQQ from '@assets/images/joinus/icon-qq.png'
import iconSkype from '@assets/images/joinus/icon-skype.png'
import iconSugram from '@assets/images/joinus/icon-sugram.png'

export const StyleJoinus = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const StyleSlider = styled.div`
  position: relative;
  flex-grow: 1;
  background: url(${bodyBg}) center center no-repeat;
  background-size: cover;
  overflow-y: auto;
  & .slick-dots {
    position: fixed;
    left: 0;
    bottom: 20px;
    & li {
      width: 14px;
      height: 6px;
      background: #b1987f;
      border-radius: 3px;
      opacity: 0.5;
      transition: all 0.3s;
      &.slick-active {
        width: 28px;
        opacity: 1;
      }
      & button {
        display: none;
      }
    }
  }
`

export const StyleSection = styled.section`
  padding: 26px 14px;
  overflow: auto;
  &:focus {
    outline: none;
  }
  & .main-title {
    display: flex;
    justify-content: center;
    margin-bottom: 14px;
    font-size: 28px;
    color: #414655;
    font-weight: bold;
    & img {
      display: block;
      width: 216px;
      height: 38px;
    }
  }
  & .sub-title {
    font-size: 14px;
    color: #414655;
    line-height: 1.3;
    font-weight: bold;
    text-align: center;
  }
  &.sec1 {
    background-size: 100% auto;
    .sub-title {
      margin-bottom: 20px;
    }
    & > img {
      display: block;
      width: 100%;
      height: auto;
      margin: 0 auto;
    }
    & .wrap {
      position: relative;
      margin-top: -70px;
      & dl {
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        padding: 15px 14px;
        background: rgba(255, 255, 255, 0.9);
        border-radius: 8px;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.08);
        &:last-child {
          margin-bottom: 0;
        }
        &::before {
          content: '';
          flex-shrink: 0;
          display: block;
          width: 32px;
          height: 32px;
          margin-right: 14px;
          background-size: 100% auto;
        }
        &.qq::before {
          background-image: url(${iconQQ});
        }
        &.skype::before {
          background-image: url(${iconSkype});
        }
        &.sugram::before {
          background-image: url(${iconSugram});
        }
      }
      & dt {
        flex-grow: 1;
        width: 50%;
        & .title {
          margin-bottom: 10px;
          font-size: 16px;
          color: #404455;
          font-weight: bold;
        }
        & .content {
          margin: 0;
          font-size: 12px;
          color: #9aa4c2;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
      & dd {
        flex-shrink: 0;
        width: 66px;
        margin: 0;
        text-align: right;
        & .copy {
          width: 60px;
          background: none;
          border: 1px solid #000;
          border-radius: 8px;
          font-size: 12px;
          color: #000;
          line-height: 30px;
          &:focus {
            outline: none;
          }
        }
      }
    }
  }
  &.sec2 {
    .sub-title {
      margin-bottom: 40px;
    }
    .wrap {
      display: flex;
      flex-wrap: wrap;
      dl {
        width: 48%;
        background: #fff;
        margin: 0 4% 4% 0;
        padding: 14px 0;
        border-radius: 6px;
        &:nth-child(2n) {
          margin-right: 0;
        }
        dt {
          width: 120px;
          height: 120px;
          margin: 0 auto;
          img {
            display: block;
            width: 100%;
            height: auto;
          }
        }
        dd {
          color: #414655;
          text-align: center;
          .title {
            margin-bottom: 5px;
            font-size: 14px;
            font-weight: bold;
          }
          .content {
            font-size: 12px;
          }
        }
      }
    }
  }
  &.sec3 {
    .sub-title {
      margin-bottom: 40px;
    }
    img {
      display: block;
      width: 100%;
      max-width: 293px;
      height: auto;
      margin: 0 auto;
      &.img01 {
        max-width: 317px;
        margin-bottom: 50px;
      }
    }
  }
`

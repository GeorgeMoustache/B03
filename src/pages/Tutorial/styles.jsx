import styled from 'styled-components'
// assets
import visitMoreButtonImg from '@assets/images/common/icon__arrow_visit-more.png'

export const StyleTutorial = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const StyleList = styled.ul`
  margin-top: 10px;
  padding: 0 14px;
  background: #fff;
`

export const StyleListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f2f2f2;
  font-size: 14px;
  color: #333333;
  line-height: 50px;
  &::after {
    content: '';
    width: 6px;
    height: 9px;
    background: url(${visitMoreButtonImg}) center center no-repeat;
    background-size: 100% auto;
  }
`

export const StyleTab = styled.div`
  position: relative;
  display: flex;
  background: #fff;
  border-bottom: 2px solid #ccc;
  overflow: auto;
  button {
    flex-shrink: 0;
    display: block;
    margin-right: 10px;
    padding: 0 10px;
    font-size: 16px;
    color: #a7abb5;
    line-height: 50px;
    &:last-child {
      margin: 0;
    }
    &.active {
      color: #404455;
    }
  }
`

export const StyleTabBar = styled.hr`
  position: absolute;
  bottom: 0;
  width: 100px;
  height: 2px;
  margin: 0;
  background: #d2b79c;
  border: none;
  transition: all 0.3s;
`

export const StyleDetail = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  padding: 14px;
  overflow: auto;
  .slick-slider {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .slick-list {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  .slick-track {
    flex-grow: 1;
    &::before {
      display: none;
    }
    .slick-slide {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      > div {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        > div {
          flex-grow: 1;
          display: flex !important;
          flex-direction: column;
        }
      }
    }
  }
  .slick-dots {
    position: static;
    li {
      display: inline-block;
      width: 14px;
      height: 6px;
      margin: 0 4px;
      background: #b1987f;
      border-radius: 3px;
      opacity: 0.5;
      transition: all 0.3s;
      &.slick-active {
        width: 28px;
        opacity: 1;
      }
      button {
        display: none;
      }
    }
  }
  img {
    display: block;
    width: 100%;
    height: auto;
  }
`

export const StyleSliderItem = styled.div`
  .slick-slider {
  }
`

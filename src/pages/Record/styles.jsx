import styled from 'styled-components'
// assets
import iconFilter from '@assets/images/record/icon_filter.png'
import iconSearch from '@assets/images/record//icon_search.png'
import nodata from '@assets/images/record/nodata.png'
import collapseButtonImg from '@assets/images/common/button_collapse.png'
import expandButtonImg from '@assets/images/common/button_expand.png'

export const StyleRecord = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

export const StyleFilter = styled.button`
  display: inline-flex;
  align-items: center;
  font-size: 18px;
  color: #414655;
  &::after {
    content: '';
    display: block;
    width: 16px;
    height: 16px;
    margin-left: 5px;
    background: url(${iconFilter}) center center no-repeat;
    background-size: 100% auto;
  }
`

export const StyleQuickDate = styled.div``

export const StyleTabs = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 14px;
  background: #fff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
  button {
    position: relative;
    display: block;
    width: 20%;
    font-size: 16px;
    color: #a9acb6;
    line-height: 50px;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      width: 40px;
      height: 2px;
      margin-left: -20px;
    }
    &.active {
      color: #3f4353;
      &::after {
        background: #d2b79c;
      }
    }
  }
`

export const StyleDateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 13px auto;
  padding: 0 14px;
  font-size: 14px;
  color: #404454;
  font-weight: bold;
  &.lock {
    opacity: 0.5;
  }
  span {
    flex-grow: 1;
    > button {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0 12px;
      background: #cbced8;
      border-radius: 15.5px;
      font-size: 14px;
      color: #404454;
      line-height: 24px;
      &::after {
        content: '';
        display: block;
        width: 0;
        height: 0;
        margin-left: 8px;
        border-width: 5px 3px 0 3px;
        border-style: solid;
        border-color: #404454 transparent transparent transparent;
      }
    }
  }
  b {
    padding: 0 10px;
  }
  .search {
    width: 28px;
    height: 28px;
    margin-left: 15px;
    background: url(${iconSearch}) center center no-repeat #cbced8;
    background-size: 15px auto;
    border-radius: 8px;
  }
`

export const StyleListWrapper = styled.div`
  flex-grow: 1;
  padding-bottom: 100px;
  overflow: auto;
`

export const StyleListItem = styled.div`
  margin-bottom: 10px;
  border-bottom: 4px solid #ccc;
  &.success {
    border-bottom-color: rgba(210, 183, 156, 0.45);
  }
  &.fail {
    border-bottom-color: rgba(219, 99, 114, 0.45);
  }
  &.processing {
    border-bottom-color: rgba(154, 164, 194, 0.45);
  }
`

export const StyleListTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 14px;
  background: #ccc;
  font-size: 14px;
  color: #404454;
  &.success {
    background: rgba(210, 183, 156, 0.45);
  }
  &.fail {
    background: rgba(219, 99, 114, 0.45);
  }
  &.processing {
    background: rgba(154, 164, 194, 0.45);
  }
  .date {
    font-size: 12px;
    color: #fff;
  }
`

export const StyleListContent = styled.div`
  background: #fff;
`

export const StyleListOverview = styled.dl`
  display: flex;
  align-items: center;
  padding: 5px 11px;
  dt {
    margin-right: 8px;
    padding-right: 11px;
    border-right: 1px solid #f2f2f2;
    font-size: 12px;
    text-align: center;
    img {
      display: block;
      width: 28px;
      height: auto;
      margin: 0 auto;
    }
  }
  dd {
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    padding: 5px 0;
    font-size: 12px;
    color: #3f4253;
    > div {
      padding: 3px 0;
    }
    .col-left {
      width: 58%;
      padding-right: 10px;
    }
    .col-right {
      width: 42%;
    }
    .order-no {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      color: #d2b79c;
      span {
        display: inline-flex;
        button {
          margin-left: 10px;
          &.toggle {
            display: block;
            width: 20px;
            height: 20px;
            background-position: center center;
            background-repeat: no-repeat;
            background-size: 100% auto;
            background-image: url(${expandButtonImg});
            &.active {
              background-image: url(${collapseButtonImg});
            }
          }
        }
      }
    }
  }
`

export const StyleListDetail = styled.ul`
  display: none;
  flex-wrap: wrap;
  margin: 0 -14px;
  padding: 9px 14px 0 14px;
  background:rgba(203, 206, 216, .45);
  border-top: 1px solid #f2f2f2;
  &.show {
    display: flex;
  }
  li {
    width: 100%;
    margin-bottom: 5px;
    font-size: 12px;
    color: #414655;
    line-height: 17px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    &.col-left {
      width: 58%;
      padding-right: 10px;
    }
    &.col-right {
      width: 42%;
    }
  }
`

export const StyleTotal = styled.ul`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%; 
  padding: 14px;
  background: #FFF;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.1);
  font-size: 14px;
  color: #000;
  line-height: 28px;
  li {
    width: 50%;
    &:nth-child(even) {
      text-align: right;
    }
    span {
      font-size: 20px;
      &.blue {
        color: #136fef;
      }
      &.red {
        color: #db6372;
      }
    }
  }
`

export const StyleEndMsg = styled.div`
  padding: 10px;
  font-size: 12px;
  color: #9b9b9b;
  text-align: center;
`

export const StyleNoData = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  color: #cbced8;
  text-align: center;
  &::before {
    content: '';
    display: block;
    width: 180px;
    height: 180px;
    margin: 0 auto 10px auto;
    background: url(${nodata}) center top no-repeat;
    background-size: 100% auto;
  }
`

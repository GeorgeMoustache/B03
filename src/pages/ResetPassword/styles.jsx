import styled from 'styled-components'
// assets
import iconHide from '@assets/images/resetPassword/icon-hide.png'
import iconShow from '@assets/images/resetPassword/icon-show.png'

export const StyleResetPassword = styled.div``

export const StyleForm = styled.div`
  margin-top: 14px;
  padding: 10px 14px 0 14px;
  background: #fff;
  > div:last-child {
    border-bottom: none;
  }
`

export const StyleFormItem = styled.div`
  margin-bottom: 5px;
  border-bottom: 1px solid #f2f2f2;
  .label {
    margin-bottom: 10px;
    font-size: 14px;
    color: #414655;
  }
  .wrapper {
    display: flex;
    padding-bottom: 6px;
    justify-content: space-between;
    input {
      flex-grow: 1;
      display: block;
      padding: 0 14px;
      border: none;
      font-size: 14px;
      color: #414655;
      line-height: 20px;
      font-weight: bold;
      &::-webkit-input-placeholder {
        color: #cbced8;
      }
      &[disabled] {
        background: none;
      }
    }
  }
`

export const StyleToggleType = styled.button`
  display: block;
  width: 18px;
  height: 18px;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${iconHide});
  background-size: 100% auto;
  &.active {
    background-image: url(${iconShow});
  }
`

export const StyleSubmit = styled.div`
  margin-top: 20px;
  padding: 0 14px;
  button {
    display: block;
    width: 100%;
    background: linear-gradient(to right, #dccab8, #d2b496);
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    line-height: 45px;
    text-align: center;
    &[disabled] {
      color: #414655;
      opacity: .4;
    }
  }
`

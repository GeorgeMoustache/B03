import styled from 'styled-components'

export const StyleWrapper = styled.div`
  padding: 0 16px;
`

export const StyleBanner = styled.img`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: 18px;
`

export const StyleMainTitle = styled.div`
  margin-bottom: 10px;
  padding-bottom: 7px;
  font-size: 20px;
  color: #d2b79c;
  font-weight: bold;
  text-align: center;
  &.border {
    border-bottom: 1px solid #d2b79c;
  }
`

export const StyleMainText = styled.div`
  margin-bottom: 10px;
  font-size: 14px;
  color: #414655;
  & p {
    line-height: 2.5;
  }
`

export const StyleSubText = styled.div`
  font-size: 12px;
  color: #414655;
  line-height: 1.5;
  & p {
    margin-bottom: 10px;
    padding-left: 12px;
    text-indent: -12px;
    & b {
      position: relative;
      top: 1px;
      font-size: 14px;
      letter-spacing: 5px;
    }
  }
`

export const StyleTable = styled.table`
  width: 100%;
  margin: 20px 0 25px 0;
  border-spacing: 0;
  border-left: 1px solid #d2b79c;
  border-top: 1px solid #d2b79c;
  font-size: 12px;
  color: #414655;
  & th,
  & td {
    padding: 10px;
    border-right: 1px solid #d2b79c;
    border-bottom: 1px solid #d2b79c;
    text-align: center;
  }
  & th {
    background: #d2b79c;
    color: #fff;
  }
`

export const StyleInputWrap = styled.div`
  display: flex;
  margin-bottom: 25px;
  padding: 5px;
  background: #fff;
  border: 1px solid #d2b79c;
  & input {
    flex-grow: 1;
    height: 30px;
    background: none;
    border: none;
    color: #084968;
  }
  & button {
    width: 79px;
    background: linear-gradient(to right, #dccab8, #d2b79c);
    border: none;
    border-radius: 5px;
    font-size: 16px;
    color: #fff;
    line-height: 34px;
    &:focus {
      outline: none;
    }
  }
`

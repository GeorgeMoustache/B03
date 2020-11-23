import styled from 'styled-components'
import backButtonImg from '@assets/images/topBar/button__topBar_back.png'
import rightArrowImg from '@assets/images/feedback/icon__feedback_right-arrow.png'

export const Container = styled.div`
  background: #f8f8f8;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  left: 0;
  overflow: hidden;
  position: fixed;
  top: 0;
  width: 100%;
`

export const MainContent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 0;
  height: 100%;
  overflow-y: scroll;
  padding: 14px 0 10px;
  position: relative;
  width: 100%;
  & > section {
    background-color: #ffffff;
    padding: 0 14px;
  }
`

export const Avatar = styled.div`
  align-items: center;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  padding: 24px 0 10px;
  & > img {
    height: 70px;
    width: 70px;
  }
`

export const ProfileInfoDetailContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;

  &:nth-child(n):not(:last-child) {
    border-bottom: #f2f2f2 1px solid;
  }
`

export const ProfileInfoTitle = styled.h5`
  color: #414655;
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: 30px;
`

export const ProfileInfoDetail = styled.input`
  font-size: 14px;
  font-weight: Medium;
  line-height: 30px;
  padding: 0 14px;
  position: relative;
  text-align: left;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &::placeholder {
    color: #cbced8;
  }
`

export const Selector = styled.button`
  align-items: center;
  background-color: #ffffff;
  color: ${({ isSelected }) => (isSelected ? '#414655' : '#cbced8')};
  display: flex;
  font-size: 14px;
  font-weight: Medium;
  justify-content: space-between;
  line-height: 30px;
  padding: 0 6px 0 14px;
  width: 100%;

  &::after {
    background-image: url(${rightArrowImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    height: 9px;
    width: 6px;
  }
`

export const EditButton = styled.div`
  height: 9px;
  width: 6px;
  background-image: url(${rightArrowImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
`

export const BackButton = styled.button`
  width: 25px;
  height: 25px;
  background-image: url(${backButtonImg});
  background-repeat: no-repeat;
  background-position: center left;
  background-size: contain;
`

export const SubmitButton = styled.button`
  flex: 0 0 auto;
  background-image: linear-gradient(to left, #d2b496, #dccab8);
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  height: 45px;
  margin: 20px 14px;
  text-align: center;

  &:disabled {
    color: #414655;
    opacity: 0.4;
  }
`

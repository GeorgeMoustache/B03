import styled from 'styled-components'

export const Container = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`

export const OfflineImg = styled.img`
  height: 180px;
  margin-bottom: 10px;
  width: 180px;
`

export const OfflineTag = styled.p`
  color: #cdcfd9;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;
  text-align: center;

  &:not(:last-child) {
    margin-bottom: 14px;
  }
`

export const ReloadButton = styled.button`
  background-image: linear-gradient(to left, #d2b496, #dccab8);
  border-radius: 5px;
  color: #ffffff;
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  height: 45px;
  letter-spacing: normal;
  line-height: normal;
  margin-top: 20px;
  text-align: center;
  width: 180px;
`

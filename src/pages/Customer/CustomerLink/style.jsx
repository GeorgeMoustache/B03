import styled from 'styled-components'
// assets
import customer24HrImg from '@assets/images/customer/icon__customerService_24hr.png'
import customerBgImg from '@assets/images/customer/bg__customerService.png'

export const CustomerLinkContainer = styled.div`
  background-image: url(${customerBgImg}), linear-gradient(to left, #f8d5c0, #ce8a70);
  background-position: right center;
  background-repeat: no-repeat;
  background-size: contain;
  border-radius: 6px;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  flex-flow: column nowrap;
  height: 100px;
  justify-content: space-between;
  margin: 0 14px;
  padding: 16px 18px;
  position: relative;
`

export const CustomerLinkTitle = styled.h5`
  color: #ffffff;
  display: flex;
  flex-flow: row nowrap;
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  font-weight: 500;
  letter-spacing: normal;
  line-height: normal;

  &::before {
    background-image: url(${customer24HrImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: block;
    height: 24px;
    margin-right: 8px;
    width: 24px;
  }
`

export const CustomerLinkSubtitle = styled.p`
  color: #ffffff;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
  opacity: 0.7;
`

export const CustomerLinkDescription = styled.span`
  color: #ffffff;
  font-size: 12px;
  font-stretch: normal;
  font-style: normal;
  font-weight: normal;
  letter-spacing: normal;
  line-height: normal;
`

export const CustomerLinkButton = styled.img`
  height: 20px;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 10px;
`

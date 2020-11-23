import React from 'react'
import styled from 'styled-components'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// components
import TopBar from '@components/TopBar'
// assets
import bg from '@assets/images/aboutus/bg.jpg'
import img01 from '@assets/images/aboutus/aboutus-1.png'
import img02 from '@assets/images/aboutus/aboutus-2.png'
import logo from '@assets/images/aboutus/logo.png'

const StyleAboutus = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  .wrapper {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url(${bg}) center center no-repeat;
    background-size: cover;
    .version {
      margin-bottom: 50px;
      font-size: 12px;
      color: #414655;
      font-weight: bold;
      text-align: center;
      &::before {
        content: '';
        display: block;
        width: 75px;
        height: 75px;
        margin-bottom: 5px;
        background: url(${logo}) center center no-repeat;
        background-size: 100% auto;
      }
    }
    & img {
      display: block;
      max-width: 339px;
      height: auto;
      &.img01 {
        margin-bottom: 50px;
      }
    }
  }
`

const Aboutus = () => {
  return (
    <StyleAboutus>
      <TopBar title='关于亚博' left={BACK} />
      <div className='wrapper'>
        <div className="version">版本號 N.N.N</div>
        <img src={img01} alt='官方认证' className='img01' />
        <img src={img02} alt='赞助伙伴' className='img02' />
      </div>
    </StyleAboutus>
  ) 
}

export default Aboutus
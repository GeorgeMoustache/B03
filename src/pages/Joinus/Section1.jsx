import React from 'react'
// components
import { StyleSection } from './styles'
import OneClickCopy from '@components/OneClickCopy/'
// assets
import sec1Img from '@assets/images/joinus/sec1-img.png'
import sec1Title from '@assets/images/joinus/sec1-title.png'

const Section1 = () => {
  return (
    <StyleSection className='sec1'>
      <div className='main-title'>
        <img src={sec1Title} alt='是成为传奇?' />
      </div>
      <div className='sub-title'>还是成为传奇的歌颂者?</div>
      <img src={sec1Img} alt="sec1-img"/>
      <div className='wrap'>
        <dl className='qq'>
          <dt>
            <div className='title'>合营部QQ</div>
            <p className='content'>1991856633</p>
          </dt>
          <dd>
            <OneClickCopy theme='large' copyString='1991856633' />
          </dd>
        </dl>
        <dl className='skype'>
          <dt>
            <div className='title'>合营部Skype</div>
            <p className='content'>1989377711@qq.com</p>
          </dt>
          <dd>
            <OneClickCopy theme='large' copyString='1989377711@qq.com' />
          </dd>
        </dl>
        <dl className='sugram'>
          <dt>
            <div className='title'>合营部Sugram</div>
            <p className='content'>86448125</p>
          </dt>
          <dd>
            <OneClickCopy theme='large' copyString='86448125' />
          </dd>
        </dl>
      </div>
    </StyleSection>
  )
}

export default Section1

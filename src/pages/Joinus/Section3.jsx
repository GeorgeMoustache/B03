import React from 'react'
// components
import { StyleSection } from './styles'
// assets
import sec3img from '@assets/images/joinus/sec3-img.png'

const Section3 = () => {
  return (
    <StyleSection className='sec3'>
      <div className='main-title'>亚博最给力的手机APP</div>
      <div className='sub-title'>
        <p>PC端&amp;H5还有独家开发的移动端</p>
        <p>全面支持iOS及安卓系统下全部移动设备</p>
      </div>
      <img src={sec3img} alt='全球顶尖专业博彩' className='img01' />
    </StyleSection>
  )
}

export default Section3

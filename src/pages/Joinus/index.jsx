import React, { useEffect } from 'react'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// plugins
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// components
import { StyleJoinus, StyleSlider } from './styles'
import TopBar from '@components/TopBar'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'

const Joinus = () => {

  //防止觸發 UC 回上一頁
  useEffect(()=> {
    const joinus = document.getElementById('joinus')
    joinus && joinus.addEventListener('touchmove', (event)=> event.preventDefault(), false)
  }, [])

  return (
    <StyleJoinus>
      <TopBar title='合营计划' left={BACK} />
      <StyleSlider>
        <Slider id="joinus"
          arrows={false}
          dots={true}
          infinite={false}
          slidesToShow={1}
          slidesToScroll={1}
        >
          <Section1 />
          <Section2 />
          <Section3 />
        </Slider>
      </StyleSlider>
    </StyleJoinus>
  )
}

export default Joinus
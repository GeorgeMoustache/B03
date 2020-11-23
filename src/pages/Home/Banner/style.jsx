import styled from 'styled-components'
// components
import Slider from 'react-slick'

export const Banner = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  width: 100%;
`

export const Carousel = styled(Slider)`
  width: 100%;
  & .sick-list .slick-slide {
    padding: 0 16px;
  }
`

export const BannerContentContainer = styled.button`
  padding: 0 14px;
`

export const BannerImg = styled.img`
  display: block;
  width: 100%;
  height: auto;
`

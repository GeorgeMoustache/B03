import React, { useContext, useEffect, useRef } from 'react'
// Context
import { HomeContext } from '../HomeContext'
// Constants
import { ACCESS_MODE } from '@constants/storage'
// plugin
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// components
import * as S from './style'

const CarouselSettings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
}

const Banner = () => {
  const { carousel } = useContext(HomeContext)
  const bannerRef = useRef(null)

  useEffect(() => {
    const preventDefault = e => e.preventDefault()
    const banner = bannerRef.current

    if (banner) {
      // 在UC，往左滑會回到上一頁，會跟banner行為衝突
      banner.addEventListener('touchmove', preventDefault, false)
    }
    return () => {
      if (banner) banner.removeEventListener('touchmove', preventDefault, false)
    }
  }, [carousel])

  const handleBannerClick = item => {
    // 取得accssMode
    const accessMode = localStorage.getItem(ACCESS_MODE)
    // 1) 判斷 jumpType
    // 1-1) jumpType = 1, 後端會給完整url，直接導向即可
    if (item.jumpType === 1) {
      // 如果是App，用window.location.href開啟，並且帶b03://前綴
      if (accessMode === 'APP') return (window.location.href = `b03://${item.link}`)

      // h5直接window open
      return window.open(item.link, '_blank')
    }
    // 1-2) jumpType = 2, 後端會給一個字串，需要呼叫getPath去取得並拼接url
    if (item.jumpType === 2) {
      // TODO: 內連
    }
  }

  if (!carousel || !('images' in carousel) || carousel.images.length === 0) return null

  return (
    <S.Banner ref={bannerRef}>
      <S.Carousel {...CarouselSettings}>
        {carousel.images.map(item => {
          return (
            <S.BannerContentContainer key={item.url} onClick={() => handleBannerClick(item)}>
              <S.BannerImg src={item.url} />
            </S.BannerContentContainer>
          )
        })}
      </S.Carousel>
    </S.Banner>
  )
}

export default Banner

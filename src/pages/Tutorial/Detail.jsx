import React, { createRef, useEffect, useState } from 'react'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// plugins
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// components
import { StyleDetail, StyleTab, StyleTabBar, StyleTutorial } from './styles'
import TopBar from '@components/TopBar/'
// utils
import tutorialData from './dataList'

const TutorialDetail = ({ location: { pathname } }) => {
  const tabRef = createRef('tabRef')
  const groupSlider = createRef('groupSlider')
  const [page, setPage] = useState(null)
  const [tabIdx, setTabIdx] = useState(0)
  const [bar, setBar] = useState({
    left: 0,
    width: 100,
  })

  // tab 點擊事件
  const handleTab = idx => evt => {
    const winWidth = window.outerWidth
    const { offsetWidth, offsetLeft } = evt.target

    // 向右捲動
    if (winWidth < offsetLeft + offsetWidth) {
      tabRef.current.scrollLeft = offsetLeft + offsetWidth - winWidth
    }

    // 向左捲動
    if (tabRef.current.scrollLeft > offsetLeft) {
      tabRef.current.scrollLeft = offsetLeft
    }

    setTabIdx(idx)
    setBar({ left: offsetLeft, width: offsetWidth })

    groupSlider.current.slickGoTo(idx)
  }

  // 滑動 trigger tab 變換
  const handleTabIdx = idx => {
    const htmlButtonList = document.getElementsByTagName('button')
    let buttonList = []
    let offsetLeft, offsetWidth

    // 將 HTMLCollectionList 內容複製到新 array
    for (let button of htmlButtonList) {
      buttonList.push(button)
    }

    // 找出哪個 tabButton 有 active 取出對應 offsetLeft 與 offsetWidth
    setTimeout(() => {
      buttonList.forEach(item => {
        if (item.classList.contains('active')) {
          const tab = document.getElementById('tabRef')
          const winWidth = window.outerWidth
          offsetLeft = item.offsetLeft
          offsetWidth = item.offsetWidth

          console.log()

          // 向右捲動
          if (winWidth < offsetLeft + offsetWidth) {
            tab.scrollLeft = offsetLeft + offsetWidth - winWidth
          }

          // 向左捲動
          if (tab.scrollLeft > offsetLeft) {
            tab.scrollLeft = offsetLeft
          }

          setBar({ left: offsetLeft, width: offsetWidth })
        }
      })
    }, 0)

    setTabIdx(idx)
  }

  // trigger groupSlider swipe
  const handleChange = (prevIdx, curIdx) => {
    if (prevIdx === curIdx) {
      if (prevIdx !== 0) {
        groupSlider.current.slickNext()
      } else {
        groupSlider.current.slickPrev()
      }
    }
  }

  // 取得頁面資料
  useEffect(() => {
    const curPath = pathname.split('/')[2]
    const curPage = tutorialData.find(item => item.path === curPath)
    setPage(curPage)
  }, [pathname, tabIdx, page])

  //防止觸發 UC 回上一頁
  useEffect(() => {
    const tutorial = document.getElementById('tutorial')
    if (tutorial) {
      tutorial.addEventListener('touchmove', event => event.preventDefault(), false)
    }
  }, [])

  return (
    <StyleTutorial>
      {page && (
        <>
          <TopBar title={page.title} left={BACK} />
          <StyleTab id='tabRef' ref={tabRef}>
            {page.tabList.length !== 1 &&
              page.tabList.map((item, idx) => {
                return (
                  <button className={idx === tabIdx ? 'active' : ''} key={idx} onClick={handleTab(idx)}>
                    {item.title}
                  </button>
                )
              })}
            <StyleTabBar style={{ left: bar.left, width: bar.width }} />
          </StyleTab>
          <StyleDetail id='tutorial'>
            <Slider
              ref={groupSlider}
              arrows={false}
              swipe={false}
              infinite={false}
              slidesToShow={1}
              slidesToScroll={1}
              afterChange={handleTabIdx}
            >
              {page.tabList.map((item, idx) => {
                return (
                  <div key={idx}>
                    <Slider
                      dots={true}
                      arrows={false}
                      infinite={false}
                      slidesToShow={1}
                      slidesToScroll={1}
                      beforeChange={handleChange}
                    >
                      {item.images.map((childItem, childIdx) => {
                        return (
                          <img
                            src={require(`@assets/images/tutorial/deposit/${childIdx}.png`)}
                            alt={childItem.caption}
                            key={childIdx}
                          />
                        )
                      })}
                    </Slider>
                  </div>
                )
              })}
            </Slider>
          </StyleDetail>
        </>
      )}
    </StyleTutorial>
  )
}

export default TutorialDetail

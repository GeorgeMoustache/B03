import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import * as routes from '@router/links'
import { useDispatch, useSelector } from 'react-redux'
// components
import { StyleDiscount, StyleListWrapper, StyleListItem, StyleLabel, StyleTime } from './styles'
import TopBar from '@components/TopBar/'
// api
import { getPromotionList } from '@api'
// actions
import { loadingClose, toastMsg } from '@actions'

const Discount = () => {
  const { portalCdn } = useSelector(state => state.config)
  const dispatch = useDispatch()
  const history = useHistory()
  const [list, setList] = useState()

  // 標籤顏色判定
  // 使用 api list 中的 typeCode 與 css 樣式對應
  // TJYH:purple; BBSYH:pink; JGGYH:red; FHYH:darkblue; ZCSCJYH:lightblue; VIPCS:blue; ZCSYH:yellow; ZZSYH:brown; HBYYH:darkyellow; SCSYH:green; YQPYYH:lightgreen; others:bluegreen;
  const colorLabel = typeCode => {
    switch (typeCode) {
      case 'TJYH':
        return 'purple'
      case 'BBSYH':
        return 'pink'
      case 'JGGYH':
        return 'red'
      case 'FHYH':
        return 'darkblue'
      case 'ZCSCJYH':
        return 'lightblue'
      case 'VIPCS':
        return 'blue'
      case 'ZCSYH':
        return 'yellow'
      case 'ZZSYH':
        return 'brown'
      case 'HBYYH':
        return 'darkyellow'
      case 'SCSYH':
        return 'green'
      case 'YQPYYH':
        return 'lightgreen'
      default:
        return 'bluegreen'
    }
  }

  // 頁面導向
  const handleGoPage = item => () => {
    const { actTitle, advertiseImageLink } = item
    switch (advertiseImageLink) {
      case 'invite':
        history.push(routes.INVITE_FRIENDS)
        break
      case 'vipInfo':
        history.push(routes.VIP)
        break
      default:
        history.push({
          pathname: routes.DISCOUNT_DETAIL,
          state: {
            title: actTitle,
            link: advertiseImageLink,
          },
        })
    }
  }

  useEffect(() => {
    getPromotionList()
      .then(res => {
        const { code, message, data } = res.data
        if (code !== 0) return dispatch(toastMsg(message))
        let records = data.records.slice()
        records.forEach(item => {
          item.beginTime = item.beginTime.split(' ')[0]
          item.endTime = item.endTime.split(' ')[0]
        })
        setList(records)
      })
      .finally(() => dispatch(loadingClose()))
  }, [dispatch])

  return (
    <StyleDiscount>
      <TopBar title='优惠活动' />
      <StyleListWrapper>
        {list &&
          list.map(item => {
            return (
              <StyleListItem onClick={handleGoPage(item)} key={item.id}>
                <img src={portalCdn + item.advertiseImage} alt='banner' />
                <StyleLabel className={colorLabel(item.typeCode)}>{item.typeName}</StyleLabel>
                <StyleTime>
                  {item.beginTime} 至 {item.endTime}
                </StyleTime>
              </StyleListItem>
            )
          })}
      </StyleListWrapper>
    </StyleDiscount>
  )
}

export default Discount

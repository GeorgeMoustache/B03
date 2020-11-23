import React from 'react'
import { useHistory } from 'react-router'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// components
import { StyleDiscountDetail } from './styles'
import TopBar from '@components/TopBar/'

const DiscountDetail = ({ location }) => {
  const history = useHistory()

  if (location && location.state) {
    const { state: { title, link } } = location
    return (
      <StyleDiscountDetail>
        <TopBar title='优惠活动详情' left={BACK} />
        {location && <iframe title={title} src={link} frameBorder='0' allowFullScreen />}
      </StyleDiscountDetail>
    )
  } else {
    history.goBack()
    return null
  }
}

export default DiscountDetail

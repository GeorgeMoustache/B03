import React from 'react'
import { useHistory } from 'react-router'
import { SPONSOR_DETAIL } from '@router/links'
// components
import { StyleList, StyleListItem, StyleSponsor } from './styles'
import TopBar from '@components/TopBar/'
// utils
import list from './dataList'

const Sponsor = () => {
  const history = useHistory()

  // 連結導向
  const handleLink = (id, title) => () => {
    history.push({
      pathname: SPONSOR_DETAIL,
      state: { id, title },
    })
  }

  return (
    <StyleSponsor>
      <TopBar title='赞助伙伴' />
      <StyleList>
        {list.map((item, idx) => {
          const { id, title, img } = item
          return (
            <StyleListItem onClick={handleLink(id, title)} key={idx}>
              <img src={img} alt={title} />
            </StyleListItem>
          )
        })}
      </StyleList>
    </StyleSponsor>
  )
}

export default Sponsor

import React from 'react'
import { useHistory } from 'react-router'
import * as routes from '@router/links'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// components
import { StyleList, StyleListItem, StyleTutorial } from './styles'
import TopBar from '@components/TopBar/'

const Tutorial = () => {
  const history = useHistory()

  // 連結導向
  const handleLink = path => () => history.push(path)

  return (
    <StyleTutorial>
      <TopBar title='教程' left={BACK} />
      <StyleList>
        <StyleListItem onClick={handleLink(routes.DEPOSIT_TUTORIAL)}>存款教程</StyleListItem>
        <StyleListItem onClick={handleLink(routes.WITHDRAWAL_TUTORIAL)}>取款教程</StyleListItem>
      </StyleList>
    </StyleTutorial>
  )
}

export default Tutorial

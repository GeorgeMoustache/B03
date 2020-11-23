import React, { Fragment, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
// constants
import { ACCESS_MODE } from '@constants/storage'
import * as routes from '@router/links'
// components
import * as S from './style'
import LinkItem from './LinkItem'
// assets
import imgAbout from '@assets/images/mine/additionalLink/icon__additional-link_about.png'
import imgApp from '@assets/images/mine/additionalLink/icon__additional-link_app.png'
import imgFriend from '@assets/images/mine/additionalLink/icon__additional-link_friend.png'
import imgHelp from '@assets/images/mine/additionalLink/icon__additional-link_help.png'
import imgJoinUs from '@assets/images/mine/additionalLink/icon__additional-link_join-us.png'
import imgRecord from '@assets/images/mine/additionalLink/icon__additional-link_record.png'
// utils
import { handleDownloadApp } from '@utils'

const AdditionalLinks = () => {
  const history = useHistory()
  const [isShowDownloadAppButton, setIsShowDownloadAppButton] = useState(true)

  const handleLink = path => () => history.push(path)

  useEffect(() => {
    const accessMode = localStorage.getItem(ACCESS_MODE)
    if (accessMode === 'APP') setIsShowDownloadAppButton(false)
  }, [])

  return (
    <Fragment>
      <S.LinksGroup>
        <LinkItem icon={imgRecord} title='兑奖纪录' subtitle='奖品兑换、红利纪录' />
      </S.LinksGroup>
      <S.LinksGroup>
        <LinkItem
          icon={imgHelp}
          title='帮助中心'
          subtitle='存取款、投注有疑问，看这里'
          handleClick={handleLink(routes.TUTORIAL)}
        />
      </S.LinksGroup>
      <S.LinksGroup>
        <LinkItem
          icon={imgFriend}
          title='邀请好友'
          subtitle='邀请好友瓜分千万现金'
          handleClick={handleLink(routes.INVITE_FRIENDS)}
        />
        <LinkItem icon={imgJoinUs} title='加入我们' subtitle='合营计划' handleClick={handleLink(routes.JOIN_US)} />
        <LinkItem icon={imgAbout} title='关于亚博' handleClick={handleLink(routes.ABOUT_US)} />
      </S.LinksGroup>
      {isShowDownloadAppButton && (
        <S.LinksGroup>
          <LinkItem icon={imgApp} title='打开亚博体育APP' handleClick={handleDownloadApp} />
        </S.LinksGroup>
      )}
    </Fragment>
  )
}

export default AdditionalLinks

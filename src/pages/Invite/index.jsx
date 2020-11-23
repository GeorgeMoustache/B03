import React, { useEffect, useState } from 'react'
import * as routes from '@router/links'
import { useDispatch, useSelector } from 'react-redux'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// components
import {
  StyleBanner,
  StyleInputWrap,
  StyleMainText,
  StyleMainTitle,
  StyleSubText,
  StyleTable,
  StyleWrapper,
} from './styles'
import TopBar from '@components/TopBar'
import OneClickCopy from '@components/OneClickCopy/'
// assets
import banner from '@assets/images/invite/banner.png'
// api
import { getInviteCode, getInviteInfo } from '@api'
// actions
import { loadingClose, toastMsg } from '@actions'

const Invite = () => {
  const dispatch = useDispatch()
  const { config } = useSelector(state => state)
  const [url, setUrl] = useState('')
  const [info, setInfo] = useState()

  useEffect(() => {
    //取得表格內容
    getInviteInfo()
      .then(res => {
        const { code, message, data } = res.data
        if (code !== 0) return dispatch(toastMsg(message))
        const { actRuleDetailItemDTOList } = data
        setInfo(actRuleDetailItemDTOList)
      })
      .finally(() => dispatch(loadingClose()))
    if (config) {
      //取得推薦碼
      getInviteCode()
        .then(res => {
          const { code, message, data } = res.data
          if (code !== 0) return dispatch(toastMsg(message))

          const { recommendCode } = data
          const urlValue = `${config.shareDomain}#${routes.REGISTER}?recommendCode=${recommendCode}`
          setUrl(urlValue)
        })
        .finally(() => dispatch(loadingClose()))
    }
  }, [config, dispatch])

  return (
    <>
      <TopBar title='邀请与奖励' left={BACK} />
      <StyleBanner src={banner} alt='vip' className='banner' />
      <StyleWrapper>
        <StyleMainTitle className='border'>呼朋唤友，成就共荣共富</StyleMainTitle>
        <StyleMainText>
          <p>活动对象：BOB首存会员</p>
          <p>活动时间：长期性活动</p>
        </StyleMainText>
        <StyleTable>
          <thead>
            <tr>
              <th>被邀请人首笔有效存款金额</th>
              <th>邀请金</th>
              <th>流水要求</th>
            </tr>
          </thead>
          <tbody>
            {info ? (
              info.map((item, idx) => {
                return (
                  <tr>
                    <td>≥{item.rechargeMoney}元</td>
                    <td>{item.fixedAmount}元</td>
                    {idx === 0 ? <td rowSpan='5'>{item.promotionRate}倍</td> : null}
                  </tr>
                )
              })
            ) : (
              <tr>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            )}
          </tbody>
        </StyleTable>
        <StyleMainTitle>呼朋唤友，开启财富分享链结：</StyleMainTitle>
        <StyleInputWrap>
          <input type='text' value={url} disabled />
          <OneClickCopy theme='largest' copyString={url} />
        </StyleInputWrap>
        <StyleMainText>
          <b>活动内容：</b>
        </StyleMainText>
        <StyleSubText>
          <p>
            <b>1</b>
            邀请人需通过活动页面自行点击“复制”获取连结（每位用户将默认唯一独立连结），然后当被邀请人使用此连结注册账户即可（每邀请一位新用户加入可获得一次邀请金，人次无限）。
          </p>
          <p>
            <b>2</b>
            被邀请人注册后需完成绑定个人资料（真实姓名与手机号码），且三天内（注册之日算起）要完成存款指定金额方能派发对应邀请金。
          </p>
          <p>
            <b>3</b>
            若先前曾有账户但已注销，之后通过邀请重新注册账户将不符合派发邀请金；对于重复注册账户也不符合该优惠。
          </p>
          <p>
            <b>4</b>活动中所获得彩金均需完成3倍流水方能提款。
          </p>
          <p>
            <b>5</b>此活动遵循BOB一般规则与条款。
          </p>
        </StyleSubText>
      </StyleWrapper>
    </>
  )
}

export default Invite

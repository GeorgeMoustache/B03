import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
// context
import { DepositContext } from './DepositContext'
// components
import { StyleNote, StyleResultItem, StyleSection } from './styles'
import OneClickCopy from '@components/OneClickCopy/'
// utils
import { handleCustomerServiceClick } from '@utils'

const Result = () => {
  const { portalCdn } = useSelector(state => state.config)
  const { payResult } = useContext(DepositContext)

  if (payResult) {
    const {
      amount,
      bqPayInfoVO: { bankIconUrl, bankName, accountName, account, province, city },
    } = payResult
    return (
      <>
        <StyleSection>
          <StyleResultItem className='bank'>
            <dt>
              <b>收款银行</b>
            </dt>
            <dd>
              <img src={`${portalCdn}${bankIconUrl}`} alt={bankName} />
              <span>{bankName}</span>
            </dd>
          </StyleResultItem>
        </StyleSection>
        <StyleSection>
          <StyleResultItem>
            <dt>姓名</dt>
            <dd>
              {accountName}
              <OneClickCopy theme='large' copyString={accountName} />
            </dd>
          </StyleResultItem>
          <StyleResultItem>
            <dt>卡號</dt>
            <dd>
              {account}
              <OneClickCopy theme='large' copyString={account} />
            </dd>
          </StyleResultItem>
          <StyleResultItem>
            <dt>地址</dt>
            <dd>{`${province}${city}`}</dd>
          </StyleResultItem>
          <StyleResultItem>
            <dt>金額</dt>
            <dd>¥ {amount}</dd>
          </StyleResultItem>
        </StyleSection>
        <StyleNote className='spacing'>
          <p>1.转账时 请务必填写正确的附言，存款才能秒到！</p>
          <p>
            2.如果转账未填写附言导致未到账，请<button onClick={handleCustomerServiceClick}>联系客服</button>办理。
          </p>
          <p>3.下次存款时，请获取新的账号，存入旧账号将无法办理。</p>
          <p>4.切勿向他人泄露订单信息以及会员的自身信息，以防被骗。</p>
          <p>5.不要相信任何除了官方渠道的充值优惠活动，一切优惠活动以官网活动详情为准，以防被骗。</p>
        </StyleNote>
      </>
    )
  } else {
    return null
  }
}

export default Result

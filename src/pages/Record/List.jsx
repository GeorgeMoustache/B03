import React, { useState, useEffect } from 'react'
// components
import {
  StyleListWrapper,
  StyleListItem,
  StyleListTitle,
  StyleListContent,
  StyleListOverview,
  StyleListDetail,
  StyleEndMsg,
  StyleNoData,
} from './styles'
import OneClickCopy from '@components/OneClickCopy/'
// assets
import iconDeposit from '@assets/images/common/icon__deposit.png'
import iconWithdrawal from '@assets/images/common/icon__withdrawal.png'
import iconPromotion from '@assets/images/common/icon__promotion.png'
import iconVip from '@assets/images/common/icon__vip.png'
// utils
import { moneyFix } from '@utils'

const List = ({ recordType, filterType, list }) => {
  const [selectIdx, setSelectIdx] = useState(-1)

  // 交易記錄 ListItem
  const transactionItem = (item, idx) => {
    return (
      <StyleListItem className={listType(item.statusCode)} key={idx}>
        <StyleListTitle className={listType(item.statusCode)}>
          {item.transactionTitle}
          <span className='date'>{item.transactionDate}</span>
        </StyleListTitle>
        <StyleListContent>
          <StyleListOverview>
            <dt>
              <img src={iconType()} alt={filterType.title} />
              {filterType.title}
            </dt>
            <dd>
              <div className='col-left'>金额：{moneyFix(item.transactionAmount)}</div>
              <div className='col-right'>状态：{item.status}</div>
              <div className='order-no'>
                单号：{item.id}
                <span>
                  <OneClickCopy theme='small' copyString={item.id} />
                </span>
              </div>
            </dd>
          </StyleListOverview>
        </StyleListContent>
      </StyleListItem>
    )
  }

  // 投注記錄 ListItem
  const bettingItem = (item, idx) => {
    const statusText = () => {
      switch(item.orderStatus) {
        case 10:
          return '已创建'
        case 20:
          return '已完成'
        case 99:
          return '已取消'
        default:
          return ''
      }
    }
    return (
      <StyleListItem className={listType(item.orderStatus)} key={idx}>
        <StyleListTitle className={listType(item.orderStatus)}>
          {`${item.platformName}:${item.gameName}`}
          <span className='date'>{item.finishTime}</span>
        </StyleListTitle>
        <StyleListContent>
          <StyleListOverview>
            <dd>
              <div className='col-left'>金额：{moneyFix(item.amount)}</div>
              <div className='col-right'>状态：{statusText()}</div>
              <div className='col-left'>派彩额：{moneyFix(item.settleAmount)}</div>
              <div className='col-right'>赔率：</div>
              <StyleListDetail className={selectIdx === idx ? 'show' : ''}>
                <li>
                  <b>{`${item.platformName}:${item.gameName}`}</b>
                </li>
                <li className='col-left'>投注额：</li>
                <li className='col-right'>赔率：</li>
                <li className='col-left'>输赢：</li>
                <li className='col-right'>投注类：聽說內容約七個字</li>
              </StyleListDetail>
              <div className='order-no'>
                单号：{item.outerOrderNo}
                <span>
                  <OneClickCopy theme='small' copyString={item.outerOrderNo} />
                  <button className={`toggle ${selectIdx === idx ? 'active' : ''}`} onClick={handleToggle(idx)} />
                </span>
              </div>
            </dd>
          </StyleListOverview>
        </StyleListContent>
      </StyleListItem>
    )
  }

  // 依成功狀態返回不同底色樣式
  const listType = status => {
    if (recordType === 0) {
      switch (status) {
        case 0:
          return 'success'
        case 1:
          return 'processing'
        case 2:
          return 'fail'
        default:
          return 'processing'
      }
    }

    if (recordType === 1) {
      switch(status) {
        case 20:
          return 'success'
        case 10:
          return 'processing'
        case 99:
          return 'fail'
        default:
          return 'processing'
      }
    }
    
  }

  // 依交易記錄類別返回不同 icon
  const iconType = () => {
    switch (filterType.title) {
      case '存款':
        return iconDeposit
      case '提款':
        return iconWithdrawal
      case '优惠':
        return iconPromotion
      case '返还':
        return iconVip
      default:
        return iconDeposit
    }
  }

  // 展開詳情
  const handleToggle = idx => () => {
    idx === selectIdx ? setSelectIdx(-1) : setSelectIdx(idx)
  }

  useEffect(()=>{
    setSelectIdx(-1)
  },[list])

  if (list && list.length !== 0) {
    return (
      <StyleListWrapper>
        {list.map((item, idx) => {
          if (recordType === 0) return transactionItem(item, idx)
          if (recordType === 1) return bettingItem(item, idx)
          return null
        })}
        <StyleEndMsg>数据加载完成</StyleEndMsg>
      </StyleListWrapper>
    )
  } else {
    return <StyleNoData>还没有任何{recordType ? '投注' : '交易'}记录</StyleNoData>
  }
}

export default List

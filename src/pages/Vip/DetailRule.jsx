import React from 'react'
import styled from 'styled-components'
// components
import SubTitle from './SubTitle'

const StyleDetailRule = styled.div`
  padding: 20px 0;
  .wrap {
    padding: 0 15px;
    dl {
      margin-bottom: 15px;
      dt {
        display: flex;
        align-items: center;
        margin-bottom: 5px;
        font-size: 14px;
        color: #404455;
        font-weight: bold;
        span {
          display: block;
          width: 16px;
          height: 16px;
          margin-right: 5px;
          background: #d2b79c;
          border-radius: 50%;
          color: #fff;
          line-height: 16px;
          text-align: center;
        }
      }
      dd {
        padding-left: 20px;
        font-size: 12px;
        color: #9aa4c2;
        line-height: 1.5;
      }
    }
  }
`

const DetailRule = () => {
  return (
    <StyleDetailRule>
      <SubTitle title='活动的一般条款与规则' space />
      <div className='wrap'>
        <dl>
          <dt>
            <span>1</span>
            晉升標準
          </dt>
          <dd>会员的累计存款以及累计流水达到相应级别的要求,即可在次日12点后晋级相应的VIP等级。</dd>
        </dl>
        <dl>
          <dt>
            <span>2</span>
            晋升顺序
          </dt>
          <dd>VIP等级达到相应的要求可每天晋升一级,但VIP等级不可越级晋升。</dd>
        </dl>
        <dl>
          <dt>
            <span>3</span>
            保级要求
          </dt>
          <dd>会员到达某VIP等级后,90天内投注需要完成保级要求.如果在此期间完成晋升,保级要求重新按照当前等级计算。</dd>
        </dl>
        <dl>
          <dt>
            <span>4</span>
            降级标准
          </dt>
          <dd>
            如果会员在一个季度(90天计算)内没有完成相应的保级要求流水,系统会自动降低一个层级,且相应的返水及其优惠也会随之调整至降级后的等级。
          </dd>
        </dl>
        <dl>
          <dt>
            <span>5</span>
            升级礼金
          </dt>
          <dd>
            升级礼金在会员达到该VIP级别后系统自动派发,每个级别的升级礼金每个会员仅能获得1次.(升级所赠送的礼金只需打1倍流水即可提款)。
          </dd>
        </dl>
        <dl>
          <dt>
            <span>6</span>
            生日礼金
          </dt>
          <dd>
            会员在注册三个月内过生日,今年将不能领取生日礼金,另注册时间大于三个月的会员可在生日当天领取生日礼金,每年可领取一次(生日礼金只需打1倍流水即可提款)。
          </dd>
        </dl>
        <dl>
          <dt>
            <span>7</span>
            每月红包
          </dt>
          <dd>会员在上个月存款大于100元,即可在本月15号领取相应等级的红包礼金(红包礼金只需打1倍流水即可提款)。</dd>
        </dl>
      </div>
    </StyleDetailRule>
  )
}

export default DetailRule

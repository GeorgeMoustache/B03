import React from 'react'
// components
import { StyleSection } from './styles'
// assets
import sec2img1 from '@assets/images/joinus/sec2-img-1.png'
import sec2img2 from '@assets/images/joinus/sec2-img-2.png'
import sec2img3 from '@assets/images/joinus/sec2-img-3.png'
import sec2img4 from '@assets/images/joinus/sec2-img-4.png'

const Section2 = () => {
  return (
    <StyleSection className='sec2'>
      <div className='main-title'>亚博重新定义了行业</div>
      <div className='sub-title'>
        <p>会员统计实时更新，实时数据</p>
        <p>分析报表，清晰简单</p>
      </div>
      <div className='wrap'>
        <dl>
          <dt>
            <img src={sec2img1} alt='会员统计' />
          </dt>
          <dd>
            <div className='title'>会员统计</div>
            <div className='content'>注册会员与有效会员随时查看</div>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src={sec2img2} alt='会员游戏明细' />
          </dt>
          <dd>
            <div className='title'>会员游戏明细</div>
            <div className='content'>会员参与游戏盈亏详情</div>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src={sec2img3} alt='会员报表' />
          </dt>
          <dd>
            <div className='title'>会员报表</div>
            <div className='content'>各种会员信息一目了然</div>
          </dd>
        </dl>
        <dl>
          <dt>
            <img src={sec2img4} alt='会员统计' />
          </dt>
          <dd>
            <div className='title'>会员统计</div>
            <div className='content'>流水/费用/输赢营收明细</div>
          </dd>
        </dl>
      </div>
    </StyleSection>
  )
}

export default Section2

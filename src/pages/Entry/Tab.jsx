import React, { useContext, useEffect } from 'react'
import { useLocation } from 'react-router'
import { Link } from 'react-router-dom'
import * as routes from '@router/links'
import styled from 'styled-components'
// context
import { EntryContext } from './EntryContext'
// components
import Login from './Login'
import Register from './Register'

const StyleTab = styled.div`
  & > .outer {
    border-radius: 10px;
    overflow: hidden;
    & > .inner {
      display: flex;
      transition: all 0.5s;
    }
  }
  .home {
    display: block;
    height: 16px;
    margin-top: 10px;
    padding-right: 50px;
    font-size: 12px;
    text-align: center;
    a {
      color: ${({ theme }) => theme.color.white};
    }
  }
`

const Tab = () => {
  const location = useLocation()
  const { entryType, setEntryType } = useContext(EntryContext)

  //切換 input type
  const handleInputType = (evt, name) => {
    //眼睛樣式
    let classList = evt.target.classList
    classList.contains('hide') ? classList.remove('hide') : classList.add('hide')

    //顯示文字或 ***
    let target = document.getElementById(name)
    target.type === 'password' ? (target.type = 'text') : (target.type = 'password')
  }

  // 判斷 router path 切換顯示登入註冊
  useEffect(() => {
    const path = location.pathname
    if (setEntryType) {
      if (path.match(routes.LOGIN)) setEntryType(0)
      if (path.match(routes.REGISTER)) setEntryType(1)
    }
  }, [location, setEntryType])

  return (
    <StyleTab>
      <div className='outer'>
        <div className='inner' style={{ transform: entryType ? 'translateX(-100%)' : 'translateX(0)' }}>
          <Login handleInputType={handleInputType}/>
          <Register handleInputType={handleInputType} />
        </div>
      </div>
      <div className='home'>{!entryType ? <Link to={routes.HOME}>先去逛逛</Link> : null}</div>
    </StyleTab>
  )
}

export default Tab

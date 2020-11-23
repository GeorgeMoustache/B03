import React, { useContext } from 'react'
import styled from 'styled-components'
// context
import { EntryContext } from './EntryContext'
// assets
import logo from '@assets/images/entry/logo.png'
import sponsor from '@assets/images/entry/sponsor.png'

const StyleSponsor = styled.div`
  margin-bottom: 10px;
  img {
    display: block;
    height: auto;
    margin: 0 auto;
    &.logo {
      width: 60px;
    }
    &.sponsor {
      width: 80%;
    }
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px 0;
    font-size: 15px;
    color: ${({ theme }) => theme.color.white};
    &::before,
    &::after {
      content: '';
      flex-grow: 1;
      display: block;
      max-width: 70px;
      height: 1px;
      margin: 0 20px;
      background: ${({ theme }) => theme.color.white};
    }
  }
`

const Sponsor = () => {
  const context = useContext(EntryContext)
  return (
    <StyleSponsor>
      <img src={logo} alt='logo' className='logo' onClick={()=> console.log(context)} />
      <div className='title'>赞助伙伴</div>
      <img src={sponsor} alt='sponsor' className='sponsor' />
    </StyleSponsor>
  )
}

export default Sponsor

import React from 'react'
import styled from 'styled-components'
// context
import EntryContextProvider from './EntryContext'
// components
import Tab from './Tab'
import FloatPanel from './FloatPanel'
import Sponsor from './Sponsor'
// assets
import entryVideo from '@assets/images/entry/entry.gif'

const StyleEntry = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100%;
  padding: 20px;
  background: url(${entryVideo}) center center no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow: scroll;
  & > .wrap {
    position: relative;
    width: 100%;
  }
`

const Entry = () => {
  return (
    <EntryContextProvider>
      <StyleEntry>
        <div className='wrap'>
          <Sponsor />
          <Tab />
        </div>
        <FloatPanel />
      </StyleEntry>
    </EntryContextProvider>
  )
}

export default Entry

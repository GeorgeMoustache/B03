import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// constants
import { BACK } from '@constants/topBarButtonTypes'
// components
import { StyleDetail, StyleFrame } from './styles'
import TopBar from '@components/TopBar/'

const SponsorDetail = ({ location }) => {
  const { config } = useSelector(state => state)
  const host = config ? config.portalCdn : `${window.location.origin}/`
  const [path, setPath] = useState('')
  
  useEffect(()=>{
    if (location.state) {
      const { id } = location.state
      setPath(`${host}static/b03/${id}/index.html`)
    }
  },[location, host])

  if (location.state) {
    const { title } = location.state
    return (
      <StyleDetail>
        <TopBar title={title} left={BACK} />
        <StyleFrame title={title} src={path} frameBorder='0' allowFullScreen />
      </StyleDetail>
    )
  } else {
    return null
  }
  
}

export default SponsorDetail

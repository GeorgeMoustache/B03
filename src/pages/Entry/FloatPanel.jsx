import React, { useContext } from 'react'
// context
import { EntryContext } from './EntryContext'
// components
import SliderVerify from './SliderVerify'
import Terms from './Terms'

const FloatPanel = () => {
  const { terms, sliderVerify } = useContext(EntryContext)

  if (terms && sliderVerify) {
    const { enabled, title, type } = terms
    return (
      <>
        {sliderVerify.enabled && <SliderVerify />}
        <Terms enabled={enabled} title={title} type={type} />
      </>
    )
  } else {
    return null
  }
  
}

export default FloatPanel
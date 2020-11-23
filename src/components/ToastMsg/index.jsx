import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
// actions
import { closeToastMsg } from '@actions'

const StyleToastMsg = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${({ theme }) => theme.zIndex.coverLayer};
  animation: toastMask .5s;
  @keyframes toastMask {
    from {
      opacity: 0;
    }
  }
  .wrap {
    position: absolute;
    left: 0;
    top: 25%;
    width: 100%;
    padding: 20px;
    background: rgba(0, 0, 0, .75);
    font-size: 14px;
    color: ${({theme}) => theme.color.white};
    text-align: center;
  }
`

const ToastMsg = ({ duration }) => {
  const toastMsg = useSelector((state) => state.toastMsg)
  const { enabled, msg } = toastMsg
  const dispatch = useDispatch()

  useEffect(() => {
    let time
    if (enabled) {
      time = setTimeout(() => {
        dispatch(closeToastMsg())
      }, duration)
    }

    return () => clearTimeout(time)
  }, [dispatch, enabled, duration])

  if (enabled) {
    return (
      <StyleToastMsg>
        <div className='wrap'>{msg}</div>
      </StyleToastMsg>
    )
  } else {
    return null
  }
}

export default ToastMsg

import React from 'react'
// components
import * as S from './styled'
// utils
import { handleDownloadApp } from '@utils'

const DownloadAppButton = () => {
  return <S.DownloadAppButton onClick={handleDownloadApp}>立即下載</S.DownloadAppButton>
}

export default DownloadAppButton

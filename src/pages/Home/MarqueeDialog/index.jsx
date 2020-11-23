import React from 'react'
import { useHistory } from 'react-router'
// Constants
import { MESSAGE_CENTER } from '@router/links'
// components
import Dialog from '@components/Dialog'

const MarqueeDialog = ({ selectedMarqueeItem, setSelectedMarqueeItem }) => {
  const history = useHistory()

  if (!selectedMarqueeItem) return null

  return (
    <Dialog
      title={selectedMarqueeItem.title}
      content={selectedMarqueeItem.content}
      extraButtons={[
        {
          title: '关闭',
          handleClick: () => setSelectedMarqueeItem(undefined),
        },
        {
          title: '查看全部',
          handleClick: () => history.push(MESSAGE_CENTER),
        },
      ]}
    />
  )
}

export default MarqueeDialog

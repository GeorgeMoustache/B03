import React from 'react'
// components
import * as S from './style'


/**
 *
 * @param {Object} props
 * @param {String} props.title Dialog的title
 * @param {content} props.content Dialog的內文
 * @param {Array | Object} props.extraButtons
 * Dialog的按鈕，以Object帶入，title是按鈕顯示的名稱，handleClick是按鈕點擊的事件
 * 多個按鈕的時候，把Object包在Array中；如果只有一個按鈕，可以直接給Object
 * @example 關於extraButtons的範例
 * <Dialog
 *  title='无双豪礼 英超霸王餐'
 *  content='尊敬的客户：【无双豪礼  英超霸王餐】优惠彩金已经发放完毕，活动详情请进入相关优惠页面查看~'
 *  extraButtons={[
 *    {title: '关闭', handleClick={handleClose}}
 *    {title: '查看全部', handleClick={handleVisitAll}}
 * ]} />
 */
const Dialog = ({ title, content, extraButtons }) => {
  const renderExtraButtons = buttons => {
    if (!buttons) return null

    return [].concat(buttons).map(button => (
      <S.DialogButton key={button.title} onClick={button.handleClick}>
        {button.title}
      </S.DialogButton>
    ))
  }

  return (
    <S.DialogContainer>
      <S.DialogMain>
        <S.DialogHeader>{title}</S.DialogHeader>
        <S.DialogContent>{content}</S.DialogContent>
        <S.DialogButtonContainer>
          {/* <S.DialogButton onClick={handleCloseDialog}>{closeButtontitle}</S.DialogButton> */}
          {renderExtraButtons(extraButtons)}
        </S.DialogButtonContainer>
      </S.DialogMain>
    </S.DialogContainer>
  )
}

export default Dialog

import React, { Fragment } from 'react'
// components
import * as S from './style'
import * as topBarButtons from './TopBarButtons'

/**
 *
 * @param {Object} props
 * @param {String} props.title TopBar的標題
 * @param {String | Array} props.left 左邊顯示的Buttons
 * @param {String | Array} props.right 右邊顯示的Buttons
 * left && right
 * 如果要顯示多個的話，要包在Array中傳入。
 * 顯示的順序是照著Array的index從小到大，從左至右
 */
const TopBar = ({ title, left, right, children, transparent, white }) => {
  /**
   * @name renderTopBarItems
   * @param {String | Array | Node} items 陣列中可以包含字串、函式、Component
   * @description
   * 用來渲染TopBar上面的Button components。可以傳自定義的字串、或是渲染Component的函式，
   * 或是直接傳Component。下方的連結是React提供，用來判斷object是不是React element。
   * @link https://reactjs.org/docs/react-api.html#isvalidelement
   *
   * @example
   * <TopBar
   *  title='消息中心'
   *  left={[BACK, renderList, <List items={items} />]}
   *  right={<TutorialButton link={VIP} />}
   * />
   */
  const renderTopBarItems = items => {
    if (!items) return null

    return [].concat(items).map(item => {
      // 如果傳入的是React Element(Component)
      if (typeof item === 'object' && React.isValidElement(item)) {
        return <Fragment key={item}>{item}</Fragment>
      }

      // 如果傳入的是Function
      if (typeof item === 'function') {
        return <Fragment key={item}>{item()}</Fragment>
      }

      // 如果傳入的是自定義字串
      if (typeof item === 'string') {
        const Component = topBarButtons[item]
        return <Component key={item} />
      }
      return null
    })
  }

  return (
    <S.TopBar transparent={transparent}>
      <S.TopBarMain>
        {left && <S.TopBarLeftArea>{renderTopBarItems(left)}</S.TopBarLeftArea>}
        {title && <S.Title white={white}>{title}</S.Title>}
        {right && <S.TopBarRightArea>{renderTopBarItems(right)}</S.TopBarRightArea>}
      </S.TopBarMain>
      {children}
    </S.TopBar>
  )
}

export default TopBar

import React, { memo, useContext, useEffect, useState } from 'react'
// context
import { HomeContext } from '../HomeContext'
// components
import * as S from './style'
import Nav from './Nav'
import GameList from './GameList'

/**
 * @name Games
 * @description 根據點擊的Tab，顯示對應的Game List
 */
const Games = () => {
  // 從HomeContext取得的Game全部資訊
  const { games } = useContext(HomeContext)
  // 關於後端回傳的Game物件，對應哪個Key值，比方說，棋牌 => '03'
  const [gameKey, setGameKey] = useState('05')
  // 對應上面GameKey，應該用顯示在畫面上的GameList
  const [displayGameList, setDisplayGameList] = useState(undefined)

  // 設定目前顯示的GameList
  useEffect(() => {
    // 1) 如果有找到對應的GameList，設定GameKey
    if (!!games && gameKey in games) {
      return setDisplayGameList(games[gameKey])
    }
    // 2) 不然就設回undefined
    setDisplayGameList(undefined)
  }, [games, gameKey])

  return (
    <S.GamesContainer>
      <Nav gameKey={gameKey} setGameKey={setGameKey} />
      <GameList displayGameList={displayGameList} />
    </S.GamesContainer>
  )
}

export default memo(Games)

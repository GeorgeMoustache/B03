### 基本介紹
1.此專案使用 create-react-app 搭建
2.環境包含了 react 全家桶成員 ['react', 'react-router', 'redux', 'react-redux']
3.CSS 部份採用 styled-components
4.全域 css 樣式已配置 reset.css 於路徑 /assets/styles 中
5.api 部份採用 axios
6.本地 api 模擬使用 express + express-mockjs
7.使用自定義路徑名稱套件，"react-app-rewire-aliases" + "react-app-rewired"，更動了原生
  CRA script 指令碼以符合套件需求，另於根目錄增加 config-overrides.js 做配置
8.承上，vscode 中的 setting.json 檔需針對 react-app-rewire-aliases 做相關參數設定

=================================================================================================
"path-autocomplete.pathMappings": {
  // for react path setting (if you use Vue, maybe you should disabled these for current work)
  "@router": "${folder}/src/router",
  "@components": "${folder}/src/components",
  "@assets": "${folder}/src/assets",
  "@pages": "${folder}/src/pages",
  "@utils": "${folder}/src/utils",
  "@reducers": "${folder}/src/reducers",
  "@actions": "${folder}/src/actions",
  "@api": "${folder}/src/api",
  "@constants": "${folder}/src/constants",
},
=================================================================================================

### API
1.本地 api 模擬請參照 api-interface/mocks/sample.js 檔案
2.搭載 express-mockjs 可亂數產生資料，詳情參考 http://mockjs.com/
3.路徑 /api/config.js 為 axios 基本設定文件，包含實體創建、header 參數定義、interceptors...等
4.路徑 /api/index.js 為 api function，可在此定義更多行為
5.本地 api 模擬中如有圖片資源為 /static 開頭請將對應檔案放置於 /public/static 中

### react-router
1.路由配置文件分為三部份，"路由常數(links.js)" + "路由配置表(config.js)" + "路由入口(index.js)"
2.路由配置表預先搭載選項 nav (是否需要導航) 及 auth (是否需要會員權限)
3.路由入口判定多項行為，如未於配置表設定元件導向 404 頁面，及取得會員資料進 redux ... 等，可自行依需求配置

### redux
1.將 store 模組化，方便於非 component 中使用，檔案位於路徑 /store/index.js
2.路徑 /reducers/index.js 配置 reducer 基本資訊，於 /store/index.jsx 中引入使用
3.預先搭載 loading reducer
4.配合路徑 /actions

### theme 主題配置
1.使用 styled-components 插件之 themeProvider 製作主題
2.主題配置檔案位於 /utils/theme.js 中，可在此自定義細節設定

### cording style
[importSort]
import module 除第 1、2 點無需註解外，其他匯入需依照類型加上註解以便分類，匯入排序如下：
1.react：依順序為 reactCore > routerCore > routerDOM > routerLink > redux
2.styled-components：一般為引入 styled hook 作使用
3.context：包含 contextProvider + contextState
4.constants：各種頁面需要使用的常數
5.plugin：外部引用的 component 及其相關依賴，如 react-slick 及其 CSS 檔案
6.components：組件引用，如使用 style-component 包裝元件，排序應在最上方
7.assets：各種靜態資源引用
8.api：發 request 所需文件
8.action：各種 action
10.utils：自定義函式及外部引用功能

[router]
1.使用指定 hook，{ useHistory, useLocation }
2.使用 router dom 操作，<Link/>、<NavLink/>
3.router constants 定義於 /router/links.js 中

[redux]
使用指定 hook，{ useDispatch, useSelector }

[pages]
1.各頁面的檔案架構需以資料夾區分，並依內容區塊切分為 component 依附其下，入口為 index.js 檔
2.例如首頁架構可能為：
HOME
--index.js
--HomeContext.jsx
--Slider.jsx
--Marquee.jsx
...

[styled-components]
1.如樣式偏少，可於對應 page 或 component 中以 JSS 方式定義
2.承上，如反之，可將樣式元件獨立為檔案 styles.jsx 依附於元件或頁面資料夾中，各別於所需位置引入使用

[components]
1.請確認元件為複數頁面使用才建立於 components 分類中
2.檔案架構等同於 pages
3.元件引用，包含 styled-components 及自定義元件，styled-component 需排列於最上方，依次才是自定義的元件

[assets]
1.專案相關資源如圖檔、樣式、字型等放置於 /assets 下，依序為 images、styles、fonts
2.以圖片為例，以 page 分類用到的檔案，如有重複使用的部份應提至 common 資料夾下並使用通用性高的檔案名稱作管理

[api]
1.在頁面或元件引入所需 api 函式發 request
2.寫法使用 promise chain 方式定義，或依需要使用 async await

[actions]
1.actions 統一入口於 /actions/index.js 中
2.對應常數制定於 /actions/actionTypes.js 中

[utils]
自定義的通用函式編寫於 /utils 下，在函式數量不多的狀況下，確保唯一入口為 index.js，如有需要分類再另外擴充

### 打包正式環境
P.S 需留意 appkey 是否正確符合版本
set "REACT_APP_KEY=MTAwMSYxMDAxMTE=" && npm run build
import Store from '@store'
// Constants
import { ACCESS_MODE } from '@constants/storage'
// APIs
import { getAppDownloadUrl } from '@api'

/**
 * @name getDeviceInfo
 * @description 取得裝置資訊(哪個OS系統、是不是手機裝置...等)
 * @example
 * const { isAndroid, isMobile, isiOS } = getDeviceInfo()
 * @returns Object，包含下面訊息:
 * isMobile(Boolean) => 是否為手機
 * isiOS(Boolean) => 是否為iOS
 * isAndroid(Boolean) => 是否為Android
 */
export const getDeviceInfo = () => {
  // 是否為手機
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
  // 是否為iOS
  const isiOS = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  // 是否為Android
  const isAndroid = navigator.userAgent.indexOf('Android') > -1 || navigator.userAgent.indexOf('Adr') > -1 //判断是否是 android终端

  return {
    isMobile,
    isiOS,
    isAndroid,
  }
}

/**
 * @name checkIsObjectEmpty
 * @param {Object} obj 用來檢測是否為空的Object
 * @description 檢查傳入的Object是否是空的
 */
export const checkIsObjectEmpty = obj => {
  return Object.keys(obj).length === 0 && obj.constructor === Object
}

/**
 * @name handleDownloadApp
 * @description 點擊之後會根據Android或是iOS下載對應App，我的頁面跟首頁都會用到
 */
export const handleDownloadApp = async () => {
  // TODO: Api內容是空的
  const { data } = await getAppDownloadUrl()

  if (data.code === 0) {
    // 1) 取得裝置資訊
    const { isAndroid, isMobile, isiOS } = getDeviceInfo()
    // 2) 取得App連結(Android以及iOS)
    const { frontIosDownloadLink, frontAndroidDownloadLink } = data.data
    // 3) 如果不是手機，略過
    if (!isMobile) return
    // 4) 如果是iOS，導至iOS下載連結
    if (isiOS) window.location.href = frontIosDownloadLink
    // 5) 如果是Android，導至Android下載連結
    if (isAndroid) window.location.href = frontAndroidDownloadLink
  } else {
    // TODO: 要做錯誤處理
  }
}

/**
 * @name handleAppLinkClick
 * @param {String} link 外部連結
 * @description 根據App或是H5，使用對應的方式開啟外部連結
 */
export const handleAppLinkClick = (link) => {
  // 取得AccessMode
  const accessMode = localStorage.getItem(ACCESS_MODE)

  // 如果AccessMode是App，帶入b03://前綴
  if (accessMode === 'APP') return (window.location.href = `b03://${link}`)

  // H5的話，使用window.open
  window.open(link)
}

/**
 * @name handleCustomerServiceClick
 * @description 處理客服點擊事件
 */
export const handleCustomerServiceClick = () => {
  // 取得config(內有客服連結)、memberInfo(內有使用者資訊)
  const { config, memberInfo } = Store.getState()

  // 兩者其中一個沒有值，就不執行接下來的邏輯
  if (!config || !memberInfo) return

  // 如果config裡面沒有客服連結，不執行接下來的邏輯
  if ('customerServiceAddress' in config === false) return

  // 判斷使用者是否登入
  const isLogin = !checkIsObjectEmpty(memberInfo)

  // 取得需要給客服連結的使用者資訊
  const { loginName, starLevel, creditLevel } = memberInfo

  // 如果是登入狀態，重組使用者資訊在客服連結上
  const customerLink = isLogin
    ? `${config.customerServiceAddress}?loginName=${loginName}&cusLevel=${starLevel}&creditLevel=${creditLevel}`
    : config.customerServiceAddress

  handleAppLinkClick(customerLink)
}


/**
 * 
 * @param {*} text 原始字串
 * @param {*} start 開始Index(包含)
 * @param {*} end 結束Index(包含)
 * @param {*} replaceChar 取代字元
 * @description 用來隱碼字串，EX 方*同
 */
export const encoded = (str, startIndex, endIndex, replaceChar = '*') => {
  return str
    .split('')
    .map((char, idx) => (idx >= startIndex && idx <= endIndex ? replaceChar : char))
    .join('')
}

export const encodedByType = (type, str, replaceChar) => {
  switch (type) {
    case 'name':
      return encoded(str, 1, 1, replaceChar)    
    case 'bankcard':
      return encoded(str, 0, str.length - 5, replaceChar)
    case 'phone':
      return encoded(str, 3, 7, replaceChar)
    default:
      return str;
  }
}

/**
 * @name deepClone
 * @param {Object} obj 你要深拷貝的物件
 * @description 把傳入的物件，深拷貝一份
 */
export const deepClone = (obj) => {
  return JSON.parse(JSON.stringify(obj))
}

/**
 * @name getArraySequence
 * @param {Number} length 長度
 * @param {Number} base 從多少開始，預設0
 * @description 回傳一個序列陣列，並從base這個數字開始
 * @example 
 * getArraySequence(3) => [0,1,2]
 * getArraySequence(3, 1) => [1,2,3]
 */
export const getArraySequence = (length, base = 0) => {
  return Array(length).fill().map((_, index) => index + base)
}

// =================================
// Format相關
// =================================

/**
 * @name moneyFix
 * @param {String | Number} n 
 * @description 將數字格式化，加入小數點後兩位，以及每千位數可以加逗號隔開
 */
export const moneyFix = (n) => {
  // 將參數先轉換為字串後切割小數點
  let num = n.toString().split('.')
  
  // 整數千分位格式化處理
  num[0] = num[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  
  // 數值包含小數點的處理
  if (num.length > 1) {
    // 小數點位數等於 1
    if (num[1].length === 1) {return `${num[0]}.${num[1]}0`}
    // 小數點位數大於 2
    if (num[1].length > 2) return `${num[0]}.${num[1].length = 2}`
    // 小數點位數等於 2
    if (num[1].length === 2) return num.join('.')
  }
  
  // 數值為正整數
  return num + '.00'
}

// =================================
// Regex相關
// =================================

/**
 * @name filterIntegerOnly
 * @param {String} val
 * @description 只允許整數輸入
 */
export const filterIntegerOnly = val => val.replace(/[^\d]/g, '')

/**
 * @name filterMobileNumber
 * @param {String} val 
 * @description 過濾使用者輸入，只保留9位數數字(大陸電話號碼)
*/
export const filterMobileNumber = val => {
  let output = filterIntegerOnly(val)
  output = output.slice(0,11)
  return output
}

/**
 * @name filterValidateCode
 * @param {String} val 驗證碼輸入
 * @description 過濾使用者輸入，只保留6位數數字(驗證碼)
 */
export const filterValidateCode = val => {
  let output = filterIntegerOnly(val)
  output = output.slice(0,6)
  return output
}

/**
 * @name filterRealName
 * @param {String} val 
 * @description 過濾使用者輸入，只保留英文、中文、「.」，然後開頭不能是英文句號
 * a-zA-Z 英文
 * \u4E00-\u9FFF 簡繁體中文(只允許拼音)
 * \. 英文句號
 * ^\. 開頭不行使用英文句號
*/
export const filterRealName = val => val.replace(/[^a-zA-Z\u4E00-\u9FFF.]|^\./g, '')

/**
 * @name filterEnglishOnly
 * @param {String} val
 * @description 只允許英文輸入
 */
export const filterEnglishOnly = val => val.replace(/[^a-zA-Z]/, '')

/**
 * @name numberOnly
 * @param {String} val
 * @description 只允許數字輸入
 */
export const filterNumberOnly = val => val.replace(/[^0-9]/, '')

/**
 * @name chineseOnly
 * @param {String} val
 * @description 只允許中文輸入(不包含注音以及注音輸入法)
 */
export const filterChineseOnly = val => val.replace(/\u4E00-\u9FFF/, '')

/**
 * @name isMobileFormatValid
 * @param {String} mobileNumber 手機號碼
 * @description 判斷輸入手機號碼是否符合大陸手機格式，開頭為1，第二碼3-9，後面接9碼數字
 * @returns Boolean (true => 有效的號碼；false => 無效的號碼)
 */
export const isMobileFormatValid = (mobileNumber) => {
  return /^1[3-9]\d{9}$/.test(mobileNumber)
}
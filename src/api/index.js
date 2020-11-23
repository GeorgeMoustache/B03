import api from './config'

//app 設定
export const getConfig = () => {
  return api({
    url: '/tenant/api/config/query-product-info',
    data: {},
  })
}

//登入 (電話)
export const loginSMS = (phoneNo, verificationCode) => {
  return api({
    url: '/office/api/player-login/login-sms',
    data: {
      phoneNo, // 使用Account
      verificationCode,
    },
  })
}

//登入 (帳密)
export const loginAccount = (loginName, passWord) => {
  return api({
    url: '/office/api/player-login/login',
    data: {
      loginName,
      passWord,
    },
  })
}

// 登出
export const logout = () => {
  const token = localStorage.getItem('token')

  return api({
    url: 'office/api/player-login/out',
    headers: {
      token,
    },
  })
}

// 是否開啟滑塊驗證
export const initSliderVerify = () => {
  return api({
    url: '/office/api/player/register-slider-valid',
    data: {},
  })
}

// 获取滑块验证码
export const getSliderVerify = () => {
  return api({
    url: '/verify/imageVerify/createImageSliderVerifyCode',
  })
}

// 验证滑块验证码
export const checkSliderVerify = xaxis => {
  return api({
    url: '/verify/imageVerify/checkImageSliderVerifyCode',
    data: {
      xaxis, // offset
    },
  })
}

//註冊
export const sendRegister = (loginName, passWord, recommendCode) => {
  return api({
    url: '/office/api/player/register',
    data: {
      loginName,
      passWord,
      recommendCode,
      registerTerminal: 1, //0:pc端; 1:H5端; 2:ios; 3:office; 4:android
    },
  })
}

//app 下載連結
export const getAppDownloadUrl = () => {
  return api({
    url: '/tenant/api/config/app-down-load-link',
  })
}

//驗證碼 (0:登录, 1:注册, 2:重設密码; 4:安全密码; 5:手機號碼)
export const getVerifyCode = (phoneNo, type) => {
  return api({
    url: '/office/api/player-login/send-code',
    data: {
      phoneNo,
      type
    },
  })
}

//驗證碼 (新增銀行卡)
export const getBankcardVerifyCode = (phoneNo) => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/bankcard/send-code',
    data: {
      phoneNo
    },
    headers: {
      token,
    },
  })
}

//重設密碼
export const resetPassword = (loginName, phoneNo, verificationCode, passWord, repeatPassWord) => {
  return api({
    url: '/office/api/player-login/reset-pwd',
    data: {
      loginName,
      phoneNo,
      verificationCode,
      passWord,
      repeatPassWord
    },
  })
}

//首頁
export const getHome = () => {
  return api({
    url: '/cms/api/v2/home/index',
    data: {},
    headers: {},
  })
}

//前往第三方遊戲
export const goGame = data => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/quota/login',
    data,
    headers: {
      token,
    },
  })
}

//優惠活動
export const getPromotionList = () => {
  return api({
    url: '/office-activity/api/act-temp/get-pages',
    data: {},
  })
}

//消息中心列表
export const getAnnouncementList = () => {
  return api({
    url: '/cms/api/announcement/getMarquee',
    data: {},
  })
}

//更新會員資料
export const updateMemberInfo = ({
  realName = null,
  birthDay = null
}) => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/player/player-update',
    data: {
      realName,
      birthDay,
      sex: 0,
    },
    headers: {
      token,
    },
  })
}

//更新會員真實姓名
export const updateMemberRealName = (realName) => {
  const token = localStorage.getItem('token')

  return api({
    url: '/api/player/player-update-realName',
    data: {
      realName,
    },
    headers: {
      token,
    },
  })
}

/**
 * @name updateMemberPhone
 * @param {String} phoneNo 中國手機
 * @param {String} code 驗證碼
 * @description 更新會員手機號碼，驗證碼使用getVerifyCode(type=5)去取得
 */
export const updateMemberPhone = ({
  phoneNo,
  code
}) => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/player/savePlayerPhone',
    data: {
      phoneNo,
      code
    },
    headers: {
      token,
    }
  })
}

//意見反饋
export const feedback = ({
  feedbackType,
  title,
  content
}) => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office-msg/api/feedback/save',
    data: {
      feedbackType,
      title,
      content,
    },
    headers: {
      token,
    },
  })
}

//邀請好友頁資訊
export const getInviteInfo = () => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office-activity/api/act-temp/searchActivityPageInformation',
    data: {
      typeCode: 'YQPYYH'
    },
    headers: {
      token,
    },
  })
}

//推薦碼
export const getInviteCode = () => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/recommender-brokerage/recommend-info',
    data: {},
    headers: {
      token,
    },
  })
}

//========== 存款相關 api ==========
//充值配置
export const getPayConfig = userName => {
  const token = localStorage.getItem('token')

  return api({
    url: '/pay/app/getPayConfig',
    data: {
      queryType: 1,
      args: JSON.stringify({
        userName, //loginName
        starLevel: 0,
        creditLevel: 0,
        clientType: 2,
        province: 110000,
        city: 110101,
      }),
    },
    headers: {
      token
    },
  })
}

//單筆充值配置
export const getPaymentConfig = payTypeId => {
  const token = localStorage.getItem('token')

  return api({
    url: '/cms/api/payment-config/get',
    data: {
      payTypeId,
    },
    headers: {
      token,
    },
  })
}

//創建充值訂單
export const createOrder = params => {
  const token = localStorage.getItem('token')

  return api({
    url: '/pay/app/createOrder',
    data: {
      args: JSON.stringify(params),
    },
    headers: {
      token,
    },
  })
}

//========== 存款相關 api ==========
//中心錢包
export const getWallet = loginName => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/player-wallet/center',
    data: {
      loginName,
    },
    headers: {
      token,
    },
  })
}

//取得所有銀行卡
export const getBankcardList = playerId => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/bankcard/player-bank-list',
    data: {
      playerId,
    },
    headers: {
      token,
    },
  })
}

//設定預設銀行卡
export const setDefaultBankcard = params => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/bankcard/player-bank-edit',
    params,
    headers: {
      token,
    },
  })
}

//保存銀行卡
export const saveBankCard = data => {
  const token = localStorage.getItem('token')

  if (!!token) {
    return api({
      url: '/office/api/bankcard/save',
      data,
      headers: {
        token,
      }
    })
  }
}

//刪除銀行卡
export const deleteBankcard = params => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/bankcard/delete-bankCard',
    params,
    headers: {
      token,
    },
  })
}

//一鍵回收
export const walletRecycle = () => {
  const token = localStorage.getItem('token')

  return api({
    url: '/quota/api/quota/recycle',
    data: {},
    headers: {
      token,
    },
  })
}

//取得剩餘次數與額度
export const getWithdrawInfo = () => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/draw-money-proposal/get-draw-times',
    data: {},
    headers: {
      token,
    },
  })
}

//取款
export const withdraw = ({
  proposalChannel,
  drawType,
  amount,
  bankId
}) => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/draw-money-proposal/save',
    data: {
      proposalChannel,
      drawType,
      amount,
      bankId,
    },
    headers: {
      token,
    },
  })
}

//取得開戶銀行列表
export const getBanksList = () => {
  return api({
    url: '/pay/bank/infors',
    data: {},
  })
}

//取得城市列表
export const getCityList = provinceId => {
  return api({
    url: '/pay/queryChinaCityList',
    data: {
      provinceId
    },
  })
}

//保存銀行卡
export const saveBankcard = params => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/bankcard/save',
    params,
    headers: {
      token,
    },
  })
}

//========== 記錄相關 api ==========
// 日期區間 info：0=交易纪录区间; 1:投注纪录区间
export const getDateRange = (info) => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/config/safeConfig/searchByTime',
    data: {
      info
    },
    headers: {
      token,
    }
  })
}

//交易記錄 type：0=充值,1=提款,2=转账,3=优惠,4=返还
export const getTransactionRecord = (type, createTimeStart, createTimeEnd) => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/player/transaction-record/get-pages',
    data: {
      type,
      createTimeStart,
      createTimeEnd
    },
    headers: {
      token,
    },
  })
}

//投注記錄篩選類別
export const getBetRecordFilter = () => {
  const token = localStorage.getItem('token')

  return api({
    url: '/dces/xskj_dc_es_micro/app/queryGameKindList',
    headers: {
      token,
    },
  })
}

//投注記錄
export const getBetRecord = (kindCode, startCreateTime, endCreateTime) => {
  const token = localStorage.getItem('token')

  return api({
    url: '/dces/xskj_dc_es_micro/app/query-game-record-list',
    data: {
      startCreateTime,
      endCreateTime,
      pageNum: 1,
      pageSize: 10000,
      kindCode,
    },
    headers: {
      token,
    },
  })
}

//========== VIP相關 api ==========

//會員等級資訊
export const getPlayerStarInfo = () => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/player-star-config/getPlayerStarInfo',
    data: {},
    headers: {
      token,
    },
  })
}

//特權等級列表
export const getVipList = () => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/player-star-config/get-list',
    data: {},
    headers: {
      token,
    },
  })
}

//詳情資訊
export const getVipRate = () => {
  const token = localStorage.getItem('token')

  return api({
    url: '/office/api/player-star-restoration-config/getPlayerStarRestorationInfo',
    data: {},
    headers: {
      token,
    },
  })
}
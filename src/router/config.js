import * as routes from './links'

import Aboutus from '@pages/Aboutus/'
import AddBankCard from '@pages/AddBankCard'
import Customer from '@pages/Customer'
import Deposit from '@pages/Deposit'
import Discount from '@pages/Discount'
import DiscountDetail from '@pages/Discount/Detail'
import Entry from '@pages/Entry/'
import Feedback from '@pages/Feedback'
import Home from '@pages/Home'
import Invite from '@pages/Invite/'
import Joinus from '@pages/Joinus/'
import MessageCenter from '@pages/MessageCenter'
import Mine from '@pages/Mine'
import Profile from '@pages/Profile'
import ResetPassword from '@pages/ResetPassword/'
import Setting from '@pages/Setting'
import Sponsor from '@pages/Sponsor'
import SponsorDetail from '@pages/Sponsor/Detail'
import Record from '@pages/Record'
import Tutorail from '@pages/Tutorial/'
import TutorailDetail from '@pages/Tutorial/Detail'
import Vip from '@pages/Vip'
import Withdrawal from '@pages/Withdrawal'
import CardManagement from '@pages/CardManagement'

export default [
  {
    path: routes.HOME, // 路由路徑
    component: Home, // 渲染Component
    auth: false, // 是否需要登入才能訪問
    nav: true, // 是否要顯示BottomBar
  },
  {
    path: routes.DISCOUNT,
    component: Discount,
    auth: false,
    nav: true,
  },
  {
    path: routes.DISCOUNT_DETAIL,
    component: DiscountDetail,
    auth: false,
    nav: true,
  },
  {
    path: routes.CUSTOMER,
    component: Customer,
    auth: false,
    nav: true,
  },
  {
    path: routes.SPONSOR,
    component: Sponsor,
    auth: false,
    nav: true,
  },
  {
    path: routes.SPONSOR_DETAIL,
    component: SponsorDetail,
    auth: false,
    nav: false,
  },
  {
    path: routes.MINE,
    component: Mine,
    auth: false,
    nav: true,
  },
  {
    path: routes.VIP,
    component: Vip,
    auth: true,
    nav: false,
  },
  {
    path: routes.VIP_DETAIL,
    component: Vip,
    auth: true,
    nav: false,
  },
  {
    path: routes.WITHDRAWAL,
    component: Withdrawal,
    auth: true,
    nav: false,
  },
  {
    path: routes.DEPOSIT,
    component: Deposit,
    auth: true,
    nav: false,
  },
  {
    path: routes.MESSAGE_CENTER,
    component: MessageCenter,
    auth: true,
    nav: false,
  },
  {
    path: routes.LOGIN,
    component: Entry,
    auth: false,
    nav: false,
  },
  {
    path: routes.REGISTER,
    component: Entry,
    auth: false,
    nav: false,
  },
  {
    path: routes.SETTING,
    component: Setting,
    auth: true,
    nav: false,
  },
  {
    path: routes.PROFILE,
    component: Profile,
    auth: true,
    nav: false,
  },
  {
    path: routes.FEEDBACK,
    component: Feedback,
    auth: true,
    nav: false,
  },
  {
    path: routes.JOIN_US,
    component: Joinus,
    auth: true,
    nav: false,
  },
  {
    path: routes.ADD_BANKCARD,
    component: AddBankCard,
    auth: true,
    nav: false,
  },
  {
    path: routes.ABOUT_US,
    component: Aboutus,
    auth: true,
    nav: false,
  },
  {
    path: routes.INVITE_FRIENDS,
    component: Invite,
    auth: true,
    nav: false,
  },
  {
    path: routes.TUTORIAL,
    component: Tutorail,
    auth: true,
    nav: false,
  },
  {
    path: routes.DEPOSIT_TUTORIAL,
    component: TutorailDetail,
    auth: true,
    nav: false,
  },
  {
    path: routes.WITHDRAWAL_TUTORIAL,
    component: TutorailDetail,
    auth: true,
    nav: false,
  },
  {
    path: routes.RESET_PASSWORD,
    component: ResetPassword,
    auth: false,
    nav: false,
  },
  {
    path: routes.PROFILE_TRANSACTIONS_RECORD,
    component: Record,
    auth: true,
    nav: false,
  },
  {
    path: routes.PROFILE_BETTINGS_RECORD,
    component: Record,
    auth: true,
    nav: false,
  },
  {
    path: routes.PROFILE_BANKCARDS,
    component: CardManagement,
    auth: true,
    nav: false,
  },
]
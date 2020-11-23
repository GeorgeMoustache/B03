import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useDispatch, useSelector } from 'react-redux'
// Contexts
import { WithdrawalContext } from '../WithdrawalContextProvider'
// Constants
import { PROFILE } from '@router/links'
// Components
import * as S from './style'
import Dialog from '@components/Dialog'
// APIs
import { getWithdrawInfo, withdraw } from '@api'
// Actions
import { loadingClose, toastMsg } from '@actions'
// Utils
import { moneyFix, filterIntegerOnly } from '@utils'

const WithdrawalAmount = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  // 取得使用者手機號碼
  const { phoneNo } = useSelector(({ memberInfo }) => memberInfo)
  // 取款資訊，包括可取款金額、可取款次數
  const [withdrawalInfo, setWithdrawalInfo] = useState({ surplusTimes: '?', surplusQuota: '????' })
  // 用戶目前銀行卡列表
  const { myBankCards, selectedBankCardIndex } = useContext(WithdrawalContext)
  // 輸入資料(取款金額)
  const [withdrawalAmount, setWithdrawalAmount] = useState('')
  // 是否要顯示關於要綁定手機號碼的彈出視窗
  const [isDialogShow, setIsDialogShow] = useState(false)

  // 處理取款金額輸入
  const handleWithdrawalAmountChange = e => {
    const numberOnlyValue = filterIntegerOnly(e.target.value)
    setWithdrawalAmount(numberOnlyValue)
  }

  // 處理提款送出
  const handleSubmit = () => {
    // 如果沒有綁定手機號碼，彈出視窗，將使用者導到個人設置頁，綁定手機號碼
    if (!phoneNo) return setIsDialogShow(true)
    // 取得取款資訊(剩餘取款次數以及可取款金額)
    const {
      surplusTimes, // 剩餘取款次數
      surplusQuota, // 可取款金額
    } = withdrawalInfo

    // 取款次數為0，顯示錯誤訊息
    if (surplusTimes === 0) return dispatch(toastMsg('已无取款次数'))
    // 取款金額小於100，顯示錯誤訊息
    if (withdrawalAmount < 100) return dispatch(toastMsg('最小可取款金额为100.00元'))
    // 取款金額大於可取款金額，顯示錯誤訊息
    if (withdrawalAmount > surplusQuota) return dispatch(toastMsg(`最大可取款金额为${moneyFix(surplusQuota)}元`))

    // 取得選取銀行卡
    const selectedBankCard = myBankCards[selectedBankCardIndex]

    if (!!selectedBankCard) {
      withdraw({
        proposalChannel: 1, // 0=web端，1=H5端 ，2=APP端，3=后台不能为空
        drawType: 1, // 1=普通提款
        amount: withdrawalAmount, // 取款金額
        bankId: selectedBankCard.id, // 銀行卡ID
      })
        .then(({ data }) => {
          // 取款成功，顯示成功訊息，並清空取款金額欄位
          if (data.code === 0) {
            setWithdrawalAmount('')
            return dispatch(toastMsg('提款成功'))
          }
          // 取款失敗，顯示錯誤訊息
          if (data.code !== 0) return dispatch(toastMsg(data.message))
        })
        .finally(() => dispatch(loadingClose()))
    }
  }

  // 關閉綁定手機彈出視窗，並導至個人設置頁面
  const handleDialogClose = () => {
    setIsDialogShow(false)
    history.replace(PROFILE)
  }

  useEffect(() => {
    getWithdrawInfo()
      .then(({ data }) => {
        if (data.code === 0) {
          const {
            surplusTimes, // 剩餘取款次數
            surplusQuota, // 可取款金額
          } = data.data
          setWithdrawalInfo({ surplusTimes, surplusQuota })
        } else {
          // TODO: Error handling
          return dispatch(toastMsg(data.message))
        }
      })
      .catch(err => console.error(err))
      .finally(() => dispatch(loadingClose()))
  }, [dispatch])

  // 沒有銀行卡，不渲染
  if (myBankCards.length === 0) return null

  return (
    <Fragment>
      <S.WithdrawalAmount>
        <S.WithdrawalAmountTitle>取款金额</S.WithdrawalAmountTitle>
        <S.WithdrawalAmountInputContainer>
          <S.WithdrawalAmountInput
            placeholder='请输入金额'
            type='tel'
            onChange={handleWithdrawalAmountChange}
            value={withdrawalAmount}
          />
        </S.WithdrawalAmountInputContainer>
        <S.Hint>
          ＊如需取款，请先转帐至中心钱包，方可取款！
          <br />
          ＊您今日剩余可取款次数为<span>{withdrawalInfo.surplusTimes}</span>次， 可取款金额为
          <span>{moneyFix(withdrawalInfo.surplusQuota)}</span>元！
        </S.Hint>
      </S.WithdrawalAmount>
      <S.SquareButtonContainer>
        <S.SquareButton disabled={!withdrawalAmount.length} onClick={handleSubmit}>
          提款
        </S.SquareButton>
      </S.SquareButtonContainer>
      {isDialogShow && (
        <Dialog
          title='无法取款'
          content='请先前往个人设置绑定手机号码'
          extraButtons={{ title: '知道了', handleClick: handleDialogClose }}
        />
      )}
    </Fragment>
  )
}

export default WithdrawalAmount

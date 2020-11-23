import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
// constants
import { PROFILE_TRANSACTIONS_RECORD, PROFILE_BETTINGS_RECORD } from '@router/links'
import { BACK } from '@constants/topBarButtonTypes'
// compenents
import { StyleRecord, StyleTotal } from './styles'
import TopBar from '@components/TopBar/'
import FilterButton from './FilterButton'
import QuickDate from './QuickDate'
import List from './List'
// api
import { getBetRecordFilter, getTransactionRecord, getBetRecord } from '@api'
// actions
import { loadingClose, toastMsg } from '@actions'
// utils
import moment from 'moment'
import { transcationRecord } from '@utils/recordData'
import { moneyFix } from '@utils'

const Record = () => {
  const location = useLocation()
  const dispatch = useDispatch()
  const [recordType, setRecordType] = useState() // 0:交易記錄; 1:投注記錄
  const [filterList, setFilterList] = useState()
  const [filterType, setFilterType] = useState({})
  const today = moment().toDate()
  const [startDate, setStartDate] = useState(today)
  const [endDate, setEndDate] = useState(today)
  const [list, setList] = useState()
  const [total, setTotal] = useState()

  // 獲取資料
  const handleFetchData = (filterType, startDate, endDate) => {
    const { type } = filterType
    const createTimeStart = `${moment(startDate).format('yyyy-MM-DD')} 00:00:00`
    const createTimeEnd = `${moment(endDate).format('yyyy-MM-DD')} 23:59:59`

    // 交易記錄
    if (recordType === 0) {
      getTransactionRecord(type, createTimeStart, createTimeEnd)
        .then(res => {
          const { code, message, data } = res.data
          if (code !== 0) return dispatch(toastMsg(message))
          data.items ? setList(data.items.records) : setList(null)
        })
        .finally(() => dispatch(loadingClose()))
    }

    // 投注記錄
    if (recordType === 1) {
      getBetRecord(type, createTimeStart, createTimeEnd)
        .then(res => {
          const { code, message, data } = res.data
          if (code !== 0) return dispatch(toastMsg(message))
          if (data) {
            const { currentAmount, currentProfitAmount, totalElements, currentValidAmount } = data
            setList(data.gameRecordList)
            setTotal({ currentAmount, currentProfitAmount, totalElements, currentValidAmount })
          } else {
            setList(null)
            setTotal(null)
          }
        })
        .finally(() => dispatch(loadingClose()))
    }
  }

  // 初始化依 router 判斷所在頁面，寫入 filterList
  useEffect(() => {
    const path = location.pathname
    // 交易記錄
    if (path.match(PROFILE_TRANSACTIONS_RECORD)) {
      setRecordType(0)
      setFilterList(transcationRecord)
      setFilterType(transcationRecord[0])
    }

    // 投注記錄
    if (path.match(PROFILE_BETTINGS_RECORD)) {
      setRecordType(1)
      getBetRecordFilter().then(res => {
        const { code, message, data } = res.data
        if (code !== 0) return dispatch(message)
        let tempList = []
        data.forEach(item => {
          let obj = {
            type: item.gameKind,
            title: item.gameKindName,
          }
          tempList.push(obj)
        })
        tempList.unshift({ type: '', title: '全部' })
        setFilterList(tempList)
        setFilterType(tempList[0])
      })
    }
  }, [location, dispatch])

  return (
    <StyleRecord>
      <TopBar
        title={recordType ? '投注记录' : '交易记录'}
        left={BACK}
        right={
          <FilterButton
            filterList={filterList}
            filterType={filterType}
            setFilterType={setFilterType}
            startDate={startDate}
            endDate={endDate}
            fetchRecord={handleFetchData}
          />
        }
      />
      <QuickDate
        recordType={recordType}
        filterType={filterType}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        fetchData={handleFetchData}
      />
      <List recordType={recordType} filterType={filterType} list={list} />
      {recordType && total ? (
        <StyleTotal>
          <li>
            总投注：<span>{moneyFix(total.currentAmount)}</span>
          </li>
          <li>
            盈利额：
            <span className={total.currentProfitAmount >= 0 ? 'blue' : 'red'}>
              {moneyFix(total.currentProfitAmount)}
            </span>
          </li>
          <li>笔数：{total.totalElements}</li>
          <li>有效流水：{moneyFix(total.currentValidAmount)}</li>
        </StyleTotal>
      ) : null}
    </StyleRecord>
  )
}

export default Record

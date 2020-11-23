import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
// components
import { StyleQuickDate, StyleTabs, StyleDateWrapper } from './styles'
import DatePicker from '@components/DatePicker'
// api
import { getDateRange } from '@api'
// actions
import { loadingClose, toastMsg } from '@actions'
// utils
import moment from 'moment'
import { tabList } from '@utils/recordData'

const QuickDate = ({ recordType, filterType, startDate, endDate, setStartDate, setEndDate, fetchData }) => {
  const dispatch = useDispatch()
  const [tabIdx, setTabIdx] = useState(0)
  const [dateRange, setDateRange] = useState({
    min: '',
    max: '',
  })
  const [disabled, setDisabled] = useState(true)

  // 快捷選時 tab 切換，重新拉資料
  const handleSetDate = idx => () => {
    // 設定 tabIndex
    setTabIdx(idx)

    let start = null
    let end = null

    switch (idx) {
      case 0:
        start = moment()
        end = moment()
        break
      case 1:
        start = moment().subtract(1, 'days')
        end = moment().subtract(1, 'days')
        break
      case 2:
        start = moment().subtract(6, 'days')
        end = moment()
        break
      case 3:
        start = moment().subtract(14, 'days')
        end = moment()
        break
      case 4:
        setDisabled(false)
        break
      default:
    }

    // 除自選外，點擊快捷選時按鈕皆寫入日期及重新獲取資料
    if (idx !== 4) {
      setDisabled(true)
      setStartDate(start.toDate())
      setEndDate(end.toDate())
      fetchData(filterType, start, end)
    }
  }

  // 取得的日期區間值
  useEffect(() => {
    if (recordType === 0 || recordType === 1) {
      getDateRange(recordType)
        .then(res => {
          const { code, message, data } = res.data
          if (code !== 0) return dispatch(toastMsg(message))
          const { startTime, endTime } = data
          const minDate = moment(startTime.split(' ')[0]).toDate()
          const maxDate = moment(endTime.split(' ')[0]).toDate()
          setDateRange({ min: minDate, max: maxDate })
        })
        .finally(() => dispatch(loadingClose()))
    }
  }, [dispatch, recordType])

  return (
    <StyleQuickDate>
      <StyleTabs>
        {tabList.map((item, idx) => {
          return (
            <button className={idx === tabIdx ? 'active' : ''} onClick={handleSetDate(idx)} key={idx}>
              {item}
            </button>
          )
        })}
      </StyleTabs>
      <StyleDateWrapper className={disabled ? 'lock' : ''}>
        <DatePicker
          defaultDate={startDate}
          date={startDate}
          minDate={dateRange.min}
          maxDate={dateRange.max}
          onConfirm={date => setStartDate(moment(date).toDate())}
          title='请选择开始日期'
          mode='date'
        >
          <button disabled={disabled}>{moment(startDate).format('yyyy / MM / DD')}</button>
        </DatePicker>
        <b>至</b>
        <DatePicker
          defaultDate={endDate}
          date={endDate}
          minDate={dateRange.min}
          maxDate={dateRange.max}
          onConfirm={date => setEndDate(moment(date).toDate())}
          title='请选择结束日期'
          mode='date'
        >
          <button disabled={disabled}>{moment(endDate).format('yyyy / MM / DD')}</button>
        </DatePicker>
        <button className='search' disabled={disabled} onClick={() => fetchData(filterType, startDate, endDate)} />
      </StyleDateWrapper>
    </StyleQuickDate>
  )
}

export default QuickDate

import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// constants
import {
  BANK_CARDS,
  CHINA_CITIES,
  FEEDBACK_TYPES,
  PRIVINCES,
  RECORD_FILTER
} from '@constants/pickerTypes'
// components
import * as S from './style'
import PickerOption from './PickerOption'
import { toastMsg } from '@actions'
// api
import { getBanksList, getCityList } from '@api'
// actions
import { loadingClose } from '@actions'
// utils
import { feedbackData } from '@utils/feedbackData'
import { provinceData } from '@utils/provinceData'

/**
 * @name Picker
 * @param {Object} props
 * @param {String} props.type Picker的類別，都整理在'@constants/pickerTypes'中
 * @param {Node} props.children 引用Picker時，包覆的子元件，子元件可以獲得 setIsPickerShow, selectedResponseData, selectedIndex...等參數值
 * @param {Number} props.initialIndex 設定一開始Picker被選擇的index，如果一開始沒有這個值，Picker就沒有選擇任何選項
 * @param {Object}} props.extraProps 額外的需要的props值，存在extraProps，之後在對應的邏輯中從extraProps取出對應值
 * @description 基本的Picker，點擊之後，從下方滑出選項，而且是單選
 *
 * @example 設定新的Picker選項
 * 1) 到'@constants/pickerTypes'設定新的type
 * 2) 在useEffect中，針對這個type，新增if statement，並撰寫針對這個類型的邏輯
 * 3) 在if statement中
 * 3-1) 首先要設定Picker Title
 * 3-2) 再來獲取Picker選項，API或是本地資料
 * 3-3) 獲取Picker選項後，重組成Picker Component需要的資料格式，{title, img}，img可省略
 * 3-4) 將獲取到的原始資料(未重組的)，用setResponseData存起來，用來回傳資料用
 *
 * @example 引用Picker Component
 * 1) 匯入Picker支援的Type => import { BANK_CARDS, CHINA_CITIES, PRIVINCES } from '@constants/pickerTypes'
 * 2) 匯入Picekr Component => import Picker from '@components/Picker'
 * 3) 將Picker Component包覆用來開關Picker及需要取得對應資料的Component，如下：
 * <Picker type={PRIVINCES}>
 *  {({ setIsPickerShow, selectedResponseData, selectedIndex }) => (
 *    <你的元件 />
 *  )}
 * </Picker>
 * 4) children獲得的資料：setIsPickerShow(Picker是否開啟)、selectedResponseData(被選擇的原始資料)、selectedIndex(被選擇的Index)
 */
const Picker = ({
  children,
  type,
  initialIndex,
  setSelectedData,
  provinceId,
  filterList,
  filterType,
  startDate,
  endDate,
  fetchRecord,
}) => {
  const dispatch = useDispatch()
  // Picker的標題
  const [pickerTitle, setPickerTitle] = useState(null)
  // Picker是否需要顯示
  const [isPickerShow, setIsPickerShow] = useState(false)
  // 根據API回傳的資料，重組成針對Picker這個component所需要的props
  const [pickerOptions, setPickerOptions] = useState(null)
  // 將API回來的資料存起來，之後在點擊的時候回傳對應的response物件
  const [responseData, setResponseData] = useState(null)
  // Picker被選取的Index
  const [selectedIndex, setSelectedIndex] = useState(-1)

  // 根據不同的type，設定不同的state跟獲取不同的資料
  useEffect(() => {
    // 选择所属银行
    if (type === BANK_CARDS) {
      // 1) 設定title
      setPickerTitle('选择所属银行')
      // 2) 打API
      getBanksList()
        .then(({ data }) => {
          if (!!data && data.code === 0) {
            const pickerOptions = data.data.map(currentItem => ({
              title: currentItem.bankName,
              img: currentItem.logoImgUrl,
            }))

            // 設定重組後，供Picker Component使用的Props
            setPickerOptions(pickerOptions)
            // 將API獲取到的資料存起來
            setResponseData(data.data)
          } else {
            //TODO: Error handling
          }
        })
        .finally(() => dispatch(loadingClose()))
    }
    // 选择城市
    if (type === CHINA_CITIES) {
      // 1) 設定title
      setPickerTitle('选择城市')
      // 2) 打API
      getCityList(provinceId || 0)
        .then(({ data }) => {
          if (!!data && data.code === 0) {
            const pickerOptions = data.data.map(currentItem => ({
              title: currentItem.city,
            }))

            // 設定重組後，供Picker Component使用的Props
            setPickerOptions(pickerOptions)
            // 將API獲取到的資料存起來
            setResponseData(data.data)
          } else {
            //TODO: Error handling
          }
        })
        .finally(() => dispatch(loadingClose()))
    }
    // 选择省份
    if (type === PRIVINCES) {
      // 1) 設定title
      setPickerTitle('选择省份')
      // 2) 獲取省份資料
      const pickerOptions = provinceData.map(({ title }) => ({
        title,
      }))

      // 設定重組後，供Picker Component使用的Props
      setPickerOptions(pickerOptions)
      // 將獲取的省份資料存起來
      setResponseData(provinceData)
    }
    // 意見回饋類型
    if (type === FEEDBACK_TYPES) {
      // 1) 設定title
      setPickerTitle('选择问题类型')
      // 2) 獲取省份資料
      const pickerOptions = feedbackData.map(({ title, img }) => ({
        title,
        img,
      }))

      // 設定重組後，供Picker Component使用的Props
      setPickerOptions(pickerOptions)
      // 將獲取的省份資料存起來
      setResponseData(feedbackData)
    }
    // 意見回饋類型
    if (type === FEEDBACK_TYPES) {
      // 1) 設定title
      setPickerTitle('选择问题类型')
      // 2) 獲取省份資料
      const pickerOptions = feedbackData.map(({ title, img }) => ({
        title,
        img,
      }))

      // 設定重組後，供Picker Component使用的Props
      setPickerOptions(pickerOptions)
      // 將獲取的省份資料存起來
      setResponseData(feedbackData)
    }
    // 交易記錄 filter type 類型
    if (type === RECORD_FILTER && filterList) {
      // 獲取記錄資料
      const pickerOptions = filterList.map(({ type, title }) => ({ type, title }))
      setPickerTitle('选择类型')
      // 設定重組後，供Picker Component使用的Props
      setPickerOptions(pickerOptions)
      // 將獲取的省份資料存起來
      setResponseData(filterList)
      // 篩選類別改變重新獲取資料
      fetchRecord(filterType, startDate, endDate)
    }
    // eslint-disable-next-line
  }, [type, provinceId, dispatch, filterType])

  //Picker被選取的時候，儲存對應的response data到state中
  useEffect(() => {
    if (selectedIndex >= 0 && responseData) setSelectedData(responseData[selectedIndex])
  }, [selectedIndex, responseData, setSelectedData])

  useEffect(() => {
    // eslint-disable-next-line
    if (initialIndex != undefined) setSelectedIndex(initialIndex)
  }, [initialIndex])

  /**
   * @name handlePickerClick
   * @param {Number} index 被點擊的到的Picker選項的index
   * @description Picker被點擊之後，設定setSelectedIndex，然後關閉Picker
   */
  const handlePickerClick = index => {
    setSelectedIndex(index)
    handleClosePicker()
  }

  const handleOpenPicker = () => {
    if (type === CHINA_CITIES && !provinceId) return dispatch(toastMsg('请选择开户行省份'))
    setIsPickerShow(true)
  }

  const handleClosePicker = () => {
    setIsPickerShow(false)
  }

  const renderPickerOptions = () => {
    if (!pickerOptions) return null

    return pickerOptions.map((pickerOptionData, index) => (
      <PickerOption
        key={index}
        index={index}
        handlePickerClick={handlePickerClick}
        isSelected={selectedIndex === index}
        {...pickerOptionData}
      />
    ))
  }

  if (!type || !pickerOptions) return null

  return (
    <Fragment>
      {isPickerShow && (
        <S.PickerOverlay>
          <S.PickerContainer>
            <S.PickerHeader>
              <S.PickerCancelButton onClick={handleClosePicker}>取消</S.PickerCancelButton>
              <S.PickerTitle>{pickerTitle}</S.PickerTitle>
            </S.PickerHeader>
            <S.PickerContent>{renderPickerOptions()}</S.PickerContent>
          </S.PickerContainer>
        </S.PickerOverlay>
      )}
      <div onClick={handleOpenPicker}>{children({ selectedIndex })}</div>
    </Fragment>
  )
}

export default Picker

import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// constants
import { BACK } from '@constants/topBarButtonTypes'
import { FEEDBACK_TYPES } from '@constants/pickerTypes'
// components
import * as S from './style'
import Picker from '@components/Picker'
import TopBar from '@components/TopBar'
// api
import { feedback } from '@api'
// actions
import { toastMsg, loadingClose } from '@actions'

const MIN_LENGTH = 20 // 問題描述，最少輸入文字
const MAX_LENGTH = 200 // 問題描述，最大輸入文字

const FeedBack = () => {
  const dispatch = useDispatch()
  // 問題類型
  const [selectedFeedbackType, setSelectedFeedbackType] = useState(null)
  // 問題描述
  const [feedbackContent, setFeedbackContent] = useState('')
  // 提交按鈕是否失效
  const [isDisabled, setIsDisabled] = useState(true)

  useEffect(() => {
    // 取得問題描述長度
    const wordCount = feedbackContent.length

    // 文字長度小於20，或是文字長度大於200，或是意見類型沒有選擇，將提交按鈕失效
    setIsDisabled(wordCount < MIN_LENGTH || wordCount > MAX_LENGTH || !selectedFeedbackType)
  }, [feedbackContent, selectedFeedbackType])

  // 使用者輸入問題描述的對應方法
  const handleChange = e => {
    setFeedbackContent(e.target.value)
  }

  const handleSubmit = async () => {
    // 組成Feedback API需要的參數
    const args = {
      feedbackType: selectedFeedbackType.value,
      title: selectedFeedbackType.title,
      content: feedbackContent,
    }

    // 呼叫API
    feedback(args)
      .then(({ data }) => {
        // 如果呼叫成功
        if (data.code === 0) {
          // 1) 重設State
          initialState()
          // 2) 顯示「意見回饋提交成功」
          return dispatch(toastMsg('意見回饋提交成功'))
        }
        // 其餘情況，顯示「提交失败」，並保留輸入內容
        return dispatch(toastMsg('意見回饋提交失敗'))
      })
      // 如果有錯誤，顯示「意見回饋提交失敗」，並保留輸入內容
      .catch(err => dispatch(toastMsg('意見回饋提交失敗')))
      .finally(() => dispatch(loadingClose()))
  }

  // 初始State，在提交成功的時候執行清空用
  const initialState = () => {
    setIsDisabled(true)
    setSelectedFeedbackType(null)
    setFeedbackContent('')
  }

  return (
    <S.Container>
      <TopBar title='意见反馈' left={BACK} />
      <S.MainContent>
        <S.Subtitle>问题类型</S.Subtitle>
        <Picker
          type={FEEDBACK_TYPES}
          setSelectedData={setSelectedFeedbackType}
          initialIndex={!selectedFeedbackType ? -1 : undefined}
        >
          {() => (
            <S.Selector isSelected={!!selectedFeedbackType}>
              {!!selectedFeedbackType ? selectedFeedbackType.title : '请选择问题类型'}
            </S.Selector>
          )}
        </Picker>
        <S.Subtitle>问题描述</S.Subtitle>
        <S.InputArea
          maxLength={MAX_LENGTH}
          minLength={MIN_LENGTH}
          onChange={handleChange}
          value={feedbackContent}
          placeholder='请详细描述您遇到的问题，填写内容不少于20字。'
        />
        <S.InputAreaInfos>
          ＊内容介于20～200字
          <S.InputAreaWordsCount>
            <span>{feedbackContent.length}</span>
            /200
          </S.InputAreaWordsCount>
        </S.InputAreaInfos>
        <S.SubmitButton disabled={isDisabled} onClick={handleSubmit}>
          提交
        </S.SubmitButton>
      </S.MainContent>
    </S.Container>
  )
}

export default FeedBack

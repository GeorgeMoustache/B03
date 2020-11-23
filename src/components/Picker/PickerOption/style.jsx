import styled from 'styled-components'

export const PickerOption = styled.li`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  height: 50px;
  background: #fff;
  padding: 0 10px;
`

export const PickerOptionContainer = styled.div`
  background: #fff;
  padding: 0 14px;

  &:nth-child(n):not(:last-child) > ${PickerOption} {
    border-bottom: #f2f2f2 1px solid;
  }
`

export const PickerOptionPrefixedIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 6px;
`

export const PickerOptionTitle = styled.p`
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #414655;
`

export const PickerOptionSelectedIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-left: auto;
`

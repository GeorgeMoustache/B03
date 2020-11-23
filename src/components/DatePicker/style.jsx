import styled from 'styled-components'

import RmcPopup from 'rmc-date-picker/lib/Popup'

export const DatePickerPopup = styled(RmcPopup)`
  background-color: transparent;

  & .rmc-picker-popup-header {
    border-radius: 15px 15px 0 0;
    box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.08);
    background-color: #ffffff;
  }

  & .rmc-picker-popup-header-left,
  & .rmc-picker-popup-header-right {
    font-size: 18px;
    font-weight: Medium;
    color: #d2b79c;
  }

  & .rmc-picker-popup-title {
    font-size: 18px;
    font-weight: Medium;
    text-align: center;
    color: #414655;
  }

  & .rmc-date-picker {
    background-color: #ffffff;
    padding: 10px 14px;
  }

  & .rmc-picker-indicator {
    border-top: 1px solid #f2f2f2;
    border-bottom: 1px solid #f2f2f2;
    height: 50px;
  }

  & .rmc-picker-mask {
    background-image: none;
  }

  & .rmc-picker-item {
    font-size: 14px;
    text-align: center;
    color: #9aa4c2;
    height: 50px;
    line-height: 50px;
  }

  & .rmc-picker-item.rmc-picker-item-selected {
    font-weight: Medium;
    color: #414655;
  }
`

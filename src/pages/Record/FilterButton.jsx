import React from 'react'
// constants
import { RECORD_FILTER } from '@constants/pickerTypes'
// components
import { StyleFilter } from './styles'
import Picker from '@components/Picker/'

const FilterButton = ({ filterList, filterType, setFilterType, startDate, endDate, fetchRecord }) => {

  // picker 組件需使用 render props
  const filter = () => () => {
    return <StyleFilter>{filterType && filterType.title}</StyleFilter>
  }
  
  return (
    <Picker
      type={RECORD_FILTER}
      setSelectedData={setFilterType}
      initialIndex={0}
      filterList={filterList}
      filterType={filterType}
      startDate={startDate}
      endDate={endDate}
      fetchRecord={fetchRecord}
    >
      {filter()}
    </Picker>
  )
}

export default FilterButton

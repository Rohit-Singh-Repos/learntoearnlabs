import React from 'react'

export const TextInput = React.memo(({textInputType,textInputPlaceholder,textInputName, textInputClass}) => {
    return (
      <input className={textInputClass} type={textInputType} placeholder={textInputPlaceholder} name={textInputName}/>
    )
})

export const SelectInput = React.memo(({selectInputData, selectInputName,selectInputClass}) => {
  return(
    <select name={selectInputName} className={selectInputClass}>
      {
        selectInputData && selectInputData.length !== 0 ? selectInputData.map((item) => (
          <option value={item.optionValue}>{item.optionText}</option>
        )) : <></>
      }
    </select>
  )
})
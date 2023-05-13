import React from "react";

export const TextInput = React.memo(
  ({
    textInputType,
    textInputPlaceholder,
    textInputName,
    textInputClass,
    textInputValue,
    textInputHandler,
    ...props
  }) => {
    return (
      <input
        className={textInputClass}
        value={textInputValue}
        type={textInputType}
        placeholder={textInputPlaceholder}
        name={textInputName}
        onChange={textInputHandler}
        {...props}
      />
    );
  }
);

export const SelectInput = React.memo(
  ({ selectInputData, selectInputName, selectInputClass, ...props }) => {
    return (
      <select name={selectInputName} className={selectInputClass} {...props}>
        <option selected>Select your profession</option>
        {selectInputData && selectInputData.length !== 0 ? (
          selectInputData.map((item,index) => (
            <option value={item.optionValue} key={item.id}>
              {item.optionText}
            </option>
          ))
        ) : (
          <></>
        )}
      </select>
    );
  }
);

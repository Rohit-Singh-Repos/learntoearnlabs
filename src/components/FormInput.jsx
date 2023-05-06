import React from "react";

export const TextInput = React.memo(
  ({
    textInputType,
    textInputPlaceholder,
    textInputName,
    textInputClass,
    textInputValue,
    textInputHandler
  }) => {
    return (
      <input
        className={textInputClass}
        value={textInputValue}
        type={textInputType}
        placeholder={textInputPlaceholder}
        name={textInputName}
        onChange={textInputHandler}
      />
    );
  }
);

export const SelectInput = React.memo(
  ({ selectInputData, selectInputName, selectInputClass, ...props }) => {
    return (
      <select name={selectInputName} className={selectInputClass} {...props}>
        {selectInputData && selectInputData.length !== 0 ? (
          selectInputData.map((item) => (
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

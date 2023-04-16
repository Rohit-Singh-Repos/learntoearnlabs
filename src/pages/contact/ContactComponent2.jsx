import React from 'react'
import { CommonCard, Div, SelectInput, SubHeading, TextInput, Button } from 'components'

export const ContactFormAreaComponent = React.memo(({inputSchemas}) => {
    const { textInput, selectInputOptions } = inputSchemas
    return (
      <Div divClass="col-sm-12 col-md-6 col-lg-6">
          <CommonCard cardClass="card rounded-0 col-sm-12 col-md-12 col-lg-12 h-100">
              <SubHeading subheadingClass="text-center fw-bold mb-5">
                Submit your query
              </SubHeading>
              {textInput && textInput.length !== 0 ? (
                textInput.map((item) => (
                  <TextInput
                    textInputClass="form-control mb-3 rounded-0 outline-0"
                    key={item.id}
                    textInputType={item.textInputType}
                    textInputPlaceholder={item.textInputPlaceholder}
                    textInputName={item.textInputName}
                  />
                ))
              ) : (
                <></>
              )}
              <SelectInput
                selectInputName="professional"
                selectInputData={selectInputOptions}
                selectInputClass="form-select rounded-0"
              />
                <Div divClass="d-grid mt-5">
                    <Button buttonClass="btn btn-primary rounded-0">Submit</Button>
                </Div>
            </CommonCard>
      </Div>
    )
  })

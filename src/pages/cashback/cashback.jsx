import React, { useEffect, useState } from "react";
import { Div, Heading, TextInput, Image, Span, Button } from "components";
import { cashbackInputSchema } from "schemas";

export const CashbackComponent = React.memo(() => {
  const [mobile, setMobile] = useState(false);
  const { textInput } = cashbackInputSchema;
  const handleResize = () => {
    if (window.innerWidth < 990) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  
  return (
    <Div divClass="container mt-5 pt-4">
      <Div divClass="row align-items-center">
        <Div divClass="col-sm-12 col-md-7 col-lg-6">
          <Image
            width="1200"
            height="800"
            // imagePath={coverImage ? coverImage : imagePath}
            imageClass="img-fluid"
            imageAltText="learn2earnlabs-home-cover"
          />
        </Div>
        <Div divClass="col-sm-12 col-md-7 col-lg-6">
          <Heading headingClass="fw-bold mb-5">
            <Span spanClass="text-primary">Claim for </Span>
            <Span>Cashback</Span>
          </Heading>
          {textInput && textInput.length !== 0 ? (
            textInput.map((item) => (
              <TextInput
                textInputClass="form-control mb-3 rounded-0"
                textInputType={item.textInputType}
                textInputPlaceholder={item.textInputPlaceholder}
                textInputName={item.textInputName}
              />
            ))
          ) : (
            <></>
          )}
          <Div divClass={mobile ? "d-grid gap-2 col-6 mx-auto" : ""}>
            <Button buttonClass="btn btn-primary rounded-0">Submit</Button>
          </Div>
        </Div>
      </Div>
    </Div>
  );
});

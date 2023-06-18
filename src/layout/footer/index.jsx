import React, { useState, useEffect } from "react";
import { Div, Paragraph, Span, LinkComponent, ListItem } from "components";
import { footerSchemaData } from "schemas/footerSchema/footerSchema";

export const Footer = React.memo(() => {
  const {
    firstContainerData: { paragraph1, paragraph2 } = {},
    secondContainerData: { listItemData } = {},
    thirdContainerData: {
      headingText,
      addressText,
      emailData,
      contactData,
      youtubeLink,
    } = {},
  } = footerSchemaData;
  const [mobile, setMobile] = useState(false);
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
    <Div divClass="bg-7 mt-5 p-5">
      <Div divClass="container-fluid">
        <Div divClass="row">
          <Div divClass="col-lg-3 col-sm-12">
            <Paragraph paragraphClass="text-white align-justify fs-14">
              {paragraph1} <br /> <br /> {paragraph2}
            </Paragraph>
          </Div>
          <Div divClass="col-lg-1 col-sm-12 d-flex justify-content-center">
            <Div
              divClass={
                mobile ? "divider-horizontal mb-5 mt-4" : "divider-vertical"
              }
            ></Div>
          </Div>
          <Div divClass="col-lg-4 col-sm-12">
            <Div divClass="row">
              {listItemData && listItemData.length !== 0 ? (
                listItemData.map((item) => (
                  <LinkComponent
                    key={item.id}
                    pathName={item.pathName}
                    linkClass="col-lg-6 col-sm-12 mb-4 "
                  >
                    {mobile ? (
                      <ListItem>{item.text}</ListItem>
                    ) : (
                      <Span spanClass="fs-12">{item.text}</Span>
                    )}
                  </LinkComponent>
                ))
              ) : (
                <></>
              )}
            </Div>
          </Div>
          <Div divClass="col-lg-1 col-sm-12 d-flex justify-content-center">
            <Div
              divClass={
                mobile ? "divider-horizontal mb-5 mt-4" : "divider-vertical"
              }
            ></Div>
          </Div>
          <Div divClass="col-lg-3 col-sm-12">
            <Paragraph paragraphClass="text-light fw-bold">{headingText}</Paragraph>
            <Paragraph paragraphClass="text-light align-justify fs-14">
              {addressText}
            </Paragraph>
            <Paragraph paragraphClass="text-light align-justify fw-bold">
              Email
            </Paragraph>
            {emailData && emailData.length !== 0 ? (
              emailData.map((item) => (
                <React.Fragment key={item.id}>
                  <Span spanClass="text-light fs-14">{item.text}</Span>
                  <br />
                </React.Fragment>
              ))
            ) : (
              <></>
            )}
            <Paragraph paragraphClass="text-light align-justify mt-3 fw-bold">
              Contact Number
            </Paragraph>
            {contactData && contactData.length !== 0 ? (
              contactData.map((item) => (
                <React.Fragment key={item.id}>
                  <Span spanClass="text-light fs-14">{item.text}</Span>
                  <br />
                </React.Fragment>
              ))
            ) : (
              <></>
            )}
            <Paragraph paragraphClass="text-light align-justify mt-3 fw-bold">
              YouTube Channel
            </Paragraph>
            <Paragraph>
              <LinkComponent
                pathName={youtubeLink}
                linkClass="text-light text-break fs-14"
              >
                {youtubeLink}
              </LinkComponent>
            </Paragraph>
          </Div>
        </Div>
      </Div>
    </Div>
  );
});

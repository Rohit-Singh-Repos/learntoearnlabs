import React, { useState, useCallback } from "react";
import { Div, Button, Heading, Paragraph } from ".";

export const Accordion = React.memo(({ accordionData }) => {
  const [accordion, setAccordion] = useState("");
  const [accordionId, setAccordionId] = useState(0);

  const openAccordion = useCallback(
    (accordionKey) => {
      if (accordion === "") {
        setAccordion("show");
        setAccordionId(accordionKey);
      } else {
        setAccordion("");
        setAccordionId(0);
      }
    },
    [accordion, accordionId]
  );

  return (
    <Div divClass="accordion" id="accordionExample">
      {accordionData && accordionData.length !== 0 ? (
        accordionData.map((item) => (
          <Div divClass="accordion-item" key={item.id}>
            <Heading headingClass="accordion-header">
              <Button
                buttonClass={
                  accordion === "show" && accordionId === item.id
                    ? "accordion-button collapsed"
                    : "accordion-button"
                }
                buttonHandler={() => openAccordion(item.id)}
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                {item.moduleName}
              </Button>
            </Heading>
            <Div
              id="collapseOne"
              divClass={
                accordion === "show" && accordionId === item.id
                  ? `accordion-collapse show mt-3`
                  : `accordion-collapse collapse`
              }
              data-bs-parent="#accordionExample"
            >
              <Div divClass="accordion-body">{item.listText}</Div>
            </Div>
          </Div>
        ))
      ) : (
        <></>
      )}
    </Div>
  );
});

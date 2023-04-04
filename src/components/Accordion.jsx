import React from "react";

export const Accordion = React.memo(({ accordionData }) => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        {accordionData && accordionData.length !== 0 ? (
          accordionData.map((item) => (
            <React.Fragment key={item.id}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed border"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  {item.moduleName}
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                {item.listText}
                </div>
              </div>
            </React.Fragment>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
});

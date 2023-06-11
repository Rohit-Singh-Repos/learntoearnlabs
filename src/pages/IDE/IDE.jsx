import { Div } from "components";
import React,{useEffect} from "react";
import { useHookstate } from "@hookstate/core"
import { PAGE_STATE } from "globalStore/globalState";

export const IDE = React.memo(() => {
  const { pageVisiblity } = useHookstate(PAGE_STATE)
  useEffect(() => {
    pageVisiblity.set(false)
  },[])
  return (
    <Div divClass="container mt-5">
      <iframe
        frameBorder="0"
        title="IDE"
        height="600px"
        src="https://onecompiler.com/embed/"
        width="100%"
      ></iframe>
    </Div>
  );
});

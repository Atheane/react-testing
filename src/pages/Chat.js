import React, { Suspense, lazy } from "react"
import TextArea from "../containers/TextArea"

const LazyMessageList = lazy(() => import("../containers/MessageList"))

export default () => (
  <>
    <Suspense fallback={<div>Loading...</div>}>
      <LazyMessageList />
    </Suspense>
    <TextArea />
  </>
)

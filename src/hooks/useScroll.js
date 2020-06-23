import { useRef, useEffect, useCallback } from "react"

export default () => {
  const ref = useRef(null)

  const scrollToBottom = useCallback(
    () => ref.current.scrollIntoView({ behavior: "smooth" }),
    []
  )

  // not very proud of it...
  const areWeTestingWithJest = () => {
    return process.env.JEST_WORKER_ID !== undefined
  }

  useEffect(() => {
    if (!areWeTestingWithJest()) {
      scrollToBottom()
    }
  })

  return ref
}

import { useEffect } from "react"

export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return

    const { body, documentElement } = document
    const scrollY = window.scrollY

    // Freeze the page
    body.style.position = "fixed"
    body.style.top = `-${scrollY}px`
    body.style.left = "0"
    body.style.right = "0"
    body.style.width = "100%"
    // Also block overscroll on the root (some Android/older Safari cases)
    documentElement.style.overscrollBehavior = "none"

    return () => {
      // Unfreeze and restore scroll
      body.style.position = ""
      const y = body.style.top
      body.style.top = ""
      body.style.left = ""
      body.style.right = ""
      body.style.width = ""
      documentElement.style.overscrollBehavior = ""
      // restore scroll
      const yNum = y ? parseInt(y || "0", 10) : 0
      window.scrollTo(0, -yNum)
    }
  }, [locked])
}

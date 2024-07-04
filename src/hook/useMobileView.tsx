import { useEffect } from 'react'

const useMobileView = (callback?: () => void) => {

  useEffect(() => {
    if (!callback) return

    const handleMobileResize = () => {
      if (window.innerWidth <= 768) {
        callback()
      }
    }

    window.addEventListener("resize", handleMobileResize)

    handleMobileResize()
    return () => {
      window.removeEventListener("resize", handleMobileResize)
    }
  }, []);
}

export default useMobileView